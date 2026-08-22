import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";

const base = new URL("../src/lib/data/generated/garbage-search-helpers/", import.meta.url);
const snapshot = JSON.parse(await readFile(new URL("../src/lib/data/generated/garbage-sorting.json", import.meta.url), "utf8"));
const prompt = await readFile(new URL("./prompts/garbage-helper-v1.md", import.meta.url), "utf8");
const manifest = JSON.parse(await readFile(new URL("./manifest.json", base), "utf8"));
const collisionArtifact = JSON.parse(await readFile(new URL("./collisions.json", base), "utf8"));
const qualifierArtifact = JSON.parse(await readFile(new URL("./qualifier-review.json", base), "utf8"));
const summary = JSON.parse(await readFile(new URL("./validation-summary.json", base), "utf8"));
const locales = ["en", "zh", "ko", "vi", "ne", "tl", "bn"];
const SHA = "1b66d0dc7ad841e77d915f27a48c77682ba6ed2cff1c07a15a2d1508332c2a04";
const expectedCategories = { bulky: 166, "metal-ceramic-glass": 119, burnable: 109, "not-collected": 48, "recyclables-used-paper": 14, "recyclables-plastic-containers-packaging": 11, "recyclables-glass-bottles": 5, "recyclables-spray-cans-gas-canisters-batteries": 4, "plastic-containers-packaging": 3, "recyclables-cans": 2, "recyclables-pet-bottles": 1 };
const normalize = (value, locale) => value.normalize("NFKC").toLocaleLowerCase(locale).replace(/[‐‑‒–—−]/gu, "-").replace(/[’ʼ]/gu, "'").replace(/[“”„]/gu, '"').replace(/\p{White_Space}+/gu, "");
const baseOf = (name) => name.replace(/（.+）/u, ""); const qualified = (name) => /（.+）/u.test(name);
const categoryCounts = snapshot.records.reduce((all, record) => ({ ...all, [record.categoryId]: (all[record.categoryId] ?? 0) + 1 }), {});
if (snapshot.records.length !== 482 || snapshot.records.filter((record) => record.officialNote).length !== 172 || snapshot.metadata.rawSha256 !== SHA || Object.keys(expectedCategories).some((key) => categoryCounts[key] !== expectedCategories[key]) || Object.keys(categoryCounts).length !== Object.keys(expectedCategories).length) throw new Error("Official snapshot changed");
const expectedManifest = { schemaVersion: 1, status: "minfo_multilingual_search_helper", policyVersion: "phase-7.7.2-v1", sourceDatasetId: "shinjuku-garbage-sorting", sourceResourceUrl: snapshot.metadata.resourceUrl, sourceSnapshotSha256: SHA, generationMethod: "development_ai_assisted_static", generatorProvider: "OpenAI", generatorModel: "gpt-5.6-terra", promptVersion: "garbage-helper-v1", promptSha256: createHash("sha256").update(prompt).digest("hex"), linguisticCertification: false, locales, officialRecordCount: 482, helperRecordCountPerLocale: 482 };
for (const [key, value] of Object.entries(expectedManifest)) if (JSON.stringify(manifest[key]) !== JSON.stringify(value)) throw new Error(`Manifest mismatch: ${key}`);
if (!/^\d{4}-\d{2}-\d{2}T/u.test(manifest.generatedAt) || Object.keys(manifest).length !== Object.keys(expectedManifest).length + 1) throw new Error("Manifest shape mismatch");
const officialIds = new Set(snapshot.records.map((record) => record.officialId)); const data = {}; const observed = [];
for (const locale of locales) {
  const text = await readFile(new URL(`./${locale}.json`, base), "utf8"); const file = JSON.parse(text); const ids = new Set(); const forms = new Map();
  if (Buffer.byteLength(text) > 96 * 1024 || gzipSync(text).byteLength > 32 * 1024 || JSON.stringify(Object.keys(file).sort()) !== JSON.stringify(["items", "locale", "schemaVersion", "sourceSnapshotSha256", "status"])) throw new Error(`${locale}: invalid file shape`);
  if (file.schemaVersion !== 1 || file.locale !== locale || file.status !== expectedManifest.status || file.sourceSnapshotSha256 !== SHA || file.items.length !== 482) throw new Error(`${locale}: header mismatch`);
  for (const item of file.items) {
    if (JSON.stringify(Object.keys(item).sort()) !== JSON.stringify(Object.keys(item).filter((key) => ["id", "n", "a", "r"].includes(key)).sort()) || !officialIds.has(item.id) || ids.has(item.id) || typeof item.n !== "string" || !item.n.trim() || [...item.n].length > 80 || (item.r !== undefined && item.r !== "check_japanese") || !Array.isArray(item.a ?? []) || item.a?.length > 2) throw new Error(`${locale}: invalid item`);
    const own = new Set(); for (const [field, value] of [["primary", item.n], ...((item.a ?? []).map((alias) => ["alias", alias]))]) { if (typeof value !== "string" || !value.trim() || [...value].length > 80) throw new Error(`${locale}: invalid form`); const key = normalize(value, locale); if (field === "alias" && (key === normalize(item.n, locale) || own.has(key))) throw new Error(`${locale}: duplicate alias`); own.add(key); forms.set(key, [...(forms.get(key) ?? []), { officialId: item.id, field, value }]); }
    if (item.r === "check_japanese" && item.a) throw new Error(`${locale}: checked Japanese item has aliases`); ids.add(item.id);
  }
  if (ids.size !== 482) throw new Error(`${locale}: ID coverage mismatch`); data[locale] = file;
  for (const [normalizedKey, sourceForms] of forms) if (new Set(sourceForms.map((form) => form.officialId)).size > 1) { const officialIdsForKey = [...new Set(sourceForms.map((form) => form.officialId))].sort(); const records = officialIdsForKey.map((id) => snapshot.records.find((record) => record.officialId === id)); const sameBase = records.every((record) => baseOf(record.officialItem) === baseOf(records[0].officialItem)) && records.some((record) => qualified(record.officialItem)); observed.push({ locale, normalizedKey, officialIds: officialIdsForKey, sourceForms: sourceForms.sort((a, b) => a.officialId.localeCompare(b.officialId) || a.field.localeCompare(b.field)), reason: sameBase ? "same_base_qualified" : "lexical_homonym", displayMode: "require_choice", approved: true }); }
}
if (collisionArtifact.schemaVersion !== 1 || JSON.stringify(collisionArtifact.collisions) !== JSON.stringify(observed)) throw new Error("Collision artifact mismatch");
if (qualifierArtifact.schemaVersion !== 1 || qualifierArtifact.records.length !== 482) throw new Error("Qualifier artifact mismatch");
const qualifiedRecords = qualifierArtifact.records.filter((record) => record.sourceQualifierJa); if (qualifiedRecords.length !== 115) throw new Error("Qualifier count mismatch");
for (const record of qualifierArtifact.records) { if (!officialIds.has(record.id) || typeof record.sourceBaseJa !== "string" || typeof record.categoryId !== "string" || JSON.stringify(Object.keys(record.localeStatus).sort()) !== JSON.stringify([...locales].sort())) throw new Error("Qualifier record invalid"); for (const locale of locales) { const status = record.localeStatus[locale]; if (!["not_applicable", "qualifier_preserved", "check_japanese"].includes(status) || (record.sourceQualifierJa && status === "not_applicable")) throw new Error("Qualifier status invalid"); } }
for (const locale of locales) { const row = summary.locales?.[locale]; const file = data[locale]; const text = JSON.stringify(file); if (!row || row.recordCount !== 482 || row.distinctOfficialIdCount !== 482 || row.primaryNameCount !== 482 || row.aliasCount !== file.items.reduce((n, item) => n + (item.a?.length ?? 0), 0) || row.checkJapaneseCount !== file.items.filter((item) => item.r === "check_japanese").length || row.collisionCount !== observed.filter((entry) => entry.locale === locale).length || row.uncompressedBytes !== Buffer.byteLength(text) || row.gzipBytes !== gzipSync(text).byteLength) throw new Error(`${locale}: summary mismatch`); }
if (summary.schemaVersion !== 1 || summary.sourceSnapshotSha256 !== SHA || summary.officialRecordCount !== 482 || summary.officialNoteCount !== 172 || summary.allLocalesComplete !== true || summary.snapshotUnchanged !== true) throw new Error("Summary mismatch");
console.log(JSON.stringify({ coverage: Object.fromEntries(locales.map((locale) => [locale, 482])), collisions: observed.length, summary: summary.locales }, null, 2));
