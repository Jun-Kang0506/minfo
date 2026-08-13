import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const productionLocales = ["en", "ja", "zh", "ko", "vi", "ne"];
const draftLocales = ["tl", "bn"];
const groups = [
  { root: "src/messages", domains: ["ui", "guided", "result", "lookup", "pages", "categories", "emergency", "prompts"] },
  { root: "src/content", domains: ["answers", "sources", "open-data"] },
];

const kind = (value) => Array.isArray(value) ? "array" : value === null ? "null" : typeof value;
const tokens = (value) => typeof value === "string"
  ? [...value.matchAll(/\{([\w-]+)\}/g)].map((match) => match[1]).sort()
  : [];
const sameTokens = (left, right) => left.length === right.length && left.every((token, index) => token === right[index]);
const leafCount = (value) => {
  if (Array.isArray(value)) return value.reduce((sum, item) => sum + leafCount(item), 0);
  if (value && typeof value === "object") return Object.values(value).reduce((sum, item) => sum + leafCount(item), 0);
  return 1;
};

function readJson(file) {
  try { return { value: JSON.parse(readFileSync(file, "utf8")) }; }
  catch (error) { return { error: error instanceof Error ? error.message : "malformed JSON" }; }
}

function compare(expected, actual, path, draft, diagnostics) {
  if (kind(expected) !== kind(actual)) {
    diagnostics.push({ severity: draft ? "draft" : "error", path, message: `type mismatch: expected ${kind(expected)}, got ${kind(actual)}` });
    return;
  }
  if (Array.isArray(expected)) {
    if (expected.length !== actual.length) diagnostics.push({ severity: draft ? "draft" : "error", path, message: `array length: expected ${expected.length}, got ${actual.length}` });
    for (let index = 0; index < Math.min(expected.length, actual.length); index += 1) compare(expected[index], actual[index], `${path}[${index}]`, draft, diagnostics);
    return;
  }
  if (expected && typeof expected === "object") {
    for (const key of Object.keys(expected)) {
      const childPath = path ? `${path}.${key}` : key;
      if (!(key in actual)) diagnostics.push({ severity: draft ? "draft" : "error", path: childPath, message: "missing key" });
      else compare(expected[key], actual[key], childPath, draft, diagnostics);
    }
    for (const key of Object.keys(actual)) if (!(key in expected)) diagnostics.push({ severity: "error", path: path ? `${path}.${key}` : key, message: "extra obsolete key" });
    return;
  }
  if (typeof expected === "string") {
    if (expected.length > 0 && actual.length === 0) diagnostics.push({ severity: draft ? "draft" : "error", path, message: "empty translation" });
    const expectedTokens = tokens(expected), actualTokens = tokens(actual);
    if (!sameTokens(expectedTokens, actualTokens)) diagnostics.push({ severity: "error", path, message: `tokens expected {${expectedTokens.join(",")}}, got {${actualTokens.join(",")}}` });
  }
}

const canonical = new Map();
let errorCount = 0;
for (const group of groups) for (const domain of group.domains) {
  const id = `${group.root}/${domain}`;
  const file = join(group.root, "en", `${domain}.json`);
  if (!existsSync(file)) { console.error(`ERROR [en] ${id}: missing domain file`); errorCount += 1; continue; }
  const parsed = readJson(file);
  if (parsed.error) { console.error(`ERROR [en] ${id}: ${parsed.error}`); errorCount += 1; continue; }
  canonical.set(id, parsed.value);
}

function checkLocale(locale, draft) {
  const diagnostics = [];
  let presentLeaves = 0, totalLeaves = 0;
  for (const group of groups) for (const domain of group.domains) {
    const id = `${group.root}/${domain}`;
    const expected = canonical.get(id);
    if (expected === undefined) continue;
    totalLeaves += leafCount(expected);
    const file = join(group.root, locale, `${domain}.json`);
    if (!existsSync(file)) { diagnostics.push({ severity: draft ? "draft" : "error", path: id, message: "missing domain file" }); continue; }
    const parsed = readJson(file);
    if (parsed.error) { diagnostics.push({ severity: "error", path: id, message: parsed.error }); continue; }
    presentLeaves += leafCount(parsed.value);
    compare(expected, parsed.value, id, draft, diagnostics);
  }
  for (const item of diagnostics) {
    const label = item.severity === "draft" ? "DRAFT" : "ERROR";
    console.log(`${label} [${locale}] ${item.path}: ${item.message}`);
    if (item.severity === "error") errorCount += 1;
  }
  const errors = diagnostics.filter((item) => item.severity === "error").length;
  const missing = diagnostics.filter((item) => item.severity === "draft").length;
  if (draft) console.log(`${locale}: ${errors ? `${errors} error(s)` : `DRAFT ${presentLeaves}/${totalLeaves} leaves present${missing ? `, ${missing} missing/incomplete` : ""}`}`);
  else console.log(`${locale}: ${errors ? `${errors} error(s)` : "complete"}`);
}

for (const locale of productionLocales) checkLocale(locale, false);
for (const locale of draftLocales) checkLocale(locale, true);
process.exitCode = errorCount ? 1 : 0;
