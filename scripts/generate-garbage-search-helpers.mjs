import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import { gzipSync } from "node:zlib";

const generated = new URL("../src/lib/data/generated/garbage-search-helpers/", import.meta.url);
const snapshot = JSON.parse(await readFile(new URL("../src/lib/data/generated/garbage-sorting.json", import.meta.url), "utf8"));
const prompt = await readFile(new URL("./prompts/garbage-helper-v1.md", import.meta.url), "utf8");
const locales = ["en", "zh", "ko", "vi", "ne", "tl", "bn"];
const SHA = "1b66d0dc7ad841e77d915f27a48c77682ba6ed2cff1c07a15a2d1508332c2a04";
const normalize = (value, locale) => value.normalize("NFKC").toLocaleLowerCase(locale).replace(/[‐‑‒–—−]/gu, "-").replace(/[’ʼ]/gu, "'").replace(/[“”„]/gu, '"').replace(/\p{White_Space}+/gu, "");
const qualifierOf = (name) => name.match(/（(.+)）/u)?.[1];
const baseOf = (name) => name.replace(/（.+）/u, "");
if (snapshot.records.length !== 482 || snapshot.metadata.rawSha256 !== SHA || snapshot.records.filter((record) => record.officialNote).length !== 172) throw new Error("Official garbage snapshot changed");

const batches = {};
for (const locale of locales) {
  const file = new URL(`./${locale}.json`, generated); const data = JSON.parse(await readFile(file, "utf8"));
  if (data.schemaVersion !== 1 || data.locale !== locale || data.status !== "minfo_multilingual_search_helper" || data.sourceSnapshotSha256 !== SHA || data.items.length !== 482) throw new Error(`${locale}: invalid helper batch`);
  const byId = new Map(data.items.map((item) => [item.id, item]));
  for (const record of snapshot.records) if (!byId.has(record.officialId)) throw new Error(`${locale}: missing official ID`);
  const clusters = new Map();
  for (const record of snapshot.records.filter((record) => qualifierOf(record.officialItem))) { const base = baseOf(record.officialItem); clusters.set(base, [...(clusters.get(base) ?? []), record]); }
  for (const group of clusters.values()) {
    const labels = group.map((record) => data.items.find((item) => item.id === record.officialId)?.n);
    const structurallyDistinct = group.length > 1 && new Set(labels).size === labels.length;
    if (!structurallyDistinct) for (const record of group) { const item = byId.get(record.officialId); item.r = "check_japanese"; delete item.a; }
  }
  const text = `${JSON.stringify(data, null, 2)}\n`;
  if (Buffer.byteLength(text) > 96 * 1024 || gzipSync(text).byteLength > 32 * 1024) throw new Error(`${locale}: helper size budget exceeded`);
  await writeFile(file, text); batches[locale] = data;
}
const collisionRows = [];
for (const locale of locales) {
  const forms = new Map();
  for (const item of batches[locale].items) for (const [field, value] of [["primary", item.n], ...((item.a ?? []).map((alias) => ["alias", alias]))]) { const key = normalize(value, locale); forms.set(key, [...(forms.get(key) ?? []), { officialId: item.id, field, value }]); }
  for (const [normalizedKey, entries] of forms) if (new Set(entries.map((entry) => entry.officialId)).size > 1) {
    const officialIds = [...new Set(entries.map((entry) => entry.officialId))].sort();
    const records = officialIds.map((id) => snapshot.records.find((record) => record.officialId === id));
    const sameBase = records.every((record) => baseOf(record.officialItem) === baseOf(records[0].officialItem)) && records.some((record) => qualifierOf(record.officialItem));
    collisionRows.push({ locale, normalizedKey, officialIds, sourceForms: entries.sort((a, b) => a.officialId.localeCompare(b.officialId) || a.field.localeCompare(b.field)), reason: sameBase ? "same_base_qualified" : "lexical_homonym", displayMode: "require_choice", approved: true });
  }
}
const reviewRecords = snapshot.records.map((record) => {
  const sourceBaseJa = baseOf(record.officialItem); const sourceQualifierJa = qualifierOf(record.officialItem); const siblings = snapshot.records.filter((candidate) => baseOf(candidate.officialItem) === sourceBaseJa && qualifierOf(candidate.officialItem));
  const localeStatus = Object.fromEntries(locales.map((locale) => { const allDistinct = siblings.length > 1 && new Set(siblings.map((candidate) => batches[locale].items.find((item) => item.id === candidate.officialId).n)).size === siblings.length; return [locale, sourceQualifierJa ? (allDistinct ? "qualifier_preserved" : "check_japanese") : "not_applicable"]; }));
  return { id: record.officialId, sourceBaseJa, ...(sourceQualifierJa ? { sourceQualifierJa, ...(siblings.length > 1 ? { clusterId: sourceBaseJa } : {}) } : {}), categoryId: record.categoryId, localeStatus };
});
const bytes = Object.fromEntries(locales.map((locale) => { const text = JSON.stringify(batches[locale]); return [locale, { recordCount: batches[locale].items.length, distinctOfficialIdCount: new Set(batches[locale].items.map((item) => item.id)).size, primaryNameCount: batches[locale].items.filter((item) => item.n).length, aliasCount: batches[locale].items.reduce((count, item) => count + (item.a?.length ?? 0), 0), checkJapaneseCount: batches[locale].items.filter((item) => item.r === "check_japanese").length, collisionCount: collisionRows.filter((row) => row.locale === locale).length, uncompressedBytes: Buffer.byteLength(text), gzipBytes: gzipSync(text).byteLength }]; }));
const manifest = { schemaVersion: 1, status: "minfo_multilingual_search_helper", policyVersion: "phase-7.7.2-v1", sourceDatasetId: "shinjuku-garbage-sorting", sourceResourceUrl: snapshot.metadata.resourceUrl, sourceSnapshotSha256: SHA, generationMethod: "development_ai_assisted_static", generatorProvider: "OpenAI", generatorModel: "gpt-5.6-terra", promptVersion: "garbage-helper-v1", promptSha256: createHash("sha256").update(prompt).digest("hex"), generatedAt: new Date().toISOString(), linguisticCertification: false, locales, officialRecordCount: 482, helperRecordCountPerLocale: 482 };
await writeFile(new URL("./manifest.json", generated), `${JSON.stringify(manifest, null, 2)}\n`);
await writeFile(new URL("./collisions.json", generated), `${JSON.stringify({ schemaVersion: 1, collisions: collisionRows }, null, 2)}\n`);
await writeFile(new URL("./qualifier-review.json", generated), `${JSON.stringify({ schemaVersion: 1, records: reviewRecords }, null, 2)}\n`);
await writeFile(new URL("./validation-summary.json", generated), `${JSON.stringify({ schemaVersion: 1, sourceSnapshotSha256: SHA, officialRecordCount: 482, officialNoteCount: 172, allLocalesComplete: true, snapshotUnchanged: true, locales: bytes }, null, 2)}\n`);
console.log("Generated strict garbage-search helper artifacts.");
