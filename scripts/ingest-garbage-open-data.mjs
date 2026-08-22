import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const input = process.argv[2] ?? "/tmp/minfo-phase77-garbage.csv";
const bytes = await readFile(input);
const sha = createHash("sha256").update(bytes).digest("hex");
const expectedSha = "1b66d0dc7ad841e77d915f27a48c77682ba6ed2cff1c07a15a2d1508332c2a04";
if (sha !== expectedSha) throw Error("garbage source SHA-256 does not match the audited resource");
if (bytes[0] !== 0xef || bytes[1] !== 0xbb || bytes[2] !== 0xbf) throw Error("garbage source must be UTF-8 with BOM");
const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes).replace(/^\uFEFF/, "");
function csv(value) { const rows=[]; let row=[], field="", quoted=false; for(let i=0;i<value.length;i++){const c=value[i], n=value[i+1]; if(quoted){if(c==='"'&&n==='"'){field+='"';i++;}else if(c==='"')quoted=false;else field+=c;}else if(c==='"')quoted=true;else if(c===','){row.push(field);field="";}else if(c==='\n'){row.push(field);rows.push(row);row=[];field="";}else if(c!=='\r')field+=c;} if(quoted) throw Error("unterminated CSV quote"); if(row.length||field){row.push(field);rows.push(row);} return rows; }
const [columns, ...rows] = csv(text);
const expectedColumns = ["全国地方公共団体コード","ID","地方公共団体名","ゴミの品目","分別区分","注意点","料金種別","料金","料金備考","備考"];
if (JSON.stringify(columns) !== JSON.stringify(expectedColumns)) throw Error("garbage source schema changed");
if (rows.length !== 482) throw Error(`garbage row count: ${rows.length}`);
const categories = new Map([["粗大ごみ",["bulky",166]],["金属・陶器・ガラスごみ",["metal-ceramic-glass",119]],["燃やすごみ",["burnable",109]],["収集できません",["not-collected",48]],["資源、古紙",["recyclables-used-paper",14]],["資源、容器包装プラスチック",["recyclables-plastic-containers-packaging",11]],["資源、びん",["recyclables-glass-bottles",5]],["資源、スプレー缶・カセットボンベ・乾電池",["recyclables-spray-cans-gas-canisters-batteries",4]],["容器包装プラスチック",["plastic-containers-packaging",3]],["資源、缶",["recyclables-cans",2]],["資源、ペットボトル",["recyclables-pet-bottles",1]]]);
const clean = (value) => value.trim();
const records = rows.map((row) => { if(row.length !== columns.length) throw Error("garbage malformed row"); const [code,officialId,municipality,officialItem,officialCategory,attention,feeType,fee,feeNote,note] = row.map(clean); if(code !== "131041" || municipality !== "新宿区" || !officialId || !officialItem || !officialCategory) throw Error("garbage blank core field or out-of-scope row"); const category=categories.get(officialCategory); if(!category) throw Error(`garbage unknown category: ${officialCategory}`); const officialNote=[attention,feeType,fee,feeNote,note].filter(Boolean).join("\n") || undefined; return { id:`garbage:${officialId}`, datasetId:"shinjuku-garbage-sorting", sourceId:"shinjuku-garbage", officialId, officialItem, searchKey:officialItem.normalize("NFKC").toLocaleLowerCase("ja-JP").replace(/\s/gu,""), categoryId:category[0], officialCategory, ...(officialNote ? { officialNote } : {}) }; });
if(new Set(records.map((r)=>r.id)).size !== records.length || new Set(records.map((r)=>r.officialId)).size !== records.length || new Set(records.map((r)=>r.searchKey)).size !== records.length) throw Error("garbage unsafe duplicate normalized record");
if(records.filter((r)=>r.officialNote).length !== 172) throw Error("garbage note count changed");
for(const [category,[,count]] of categories) if(records.filter((r)=>r.officialCategory===category).length!==count) throw Error(`garbage category count changed: ${category}`);
const snapshot={metadata:{datasetId:"shinjuku-garbage-sorting",titleJa:"新宿区のゴミの分別方法一覧",catalogUrl:"https://catalog.data.metro.tokyo.lg.jp/dataset/t131041d0000000129",resourceId:"4546f9be-cb16-4872-901a-23af758ea1fd",resourceUrl:"https://www.city.shinjuku.lg.jp/content/000420404.csv",packageId:"0231d62a-eb57-430b-b399-a716aecce681",sourceId:"shinjuku-garbage",sourceOrganization:"環境清掃部新宿清掃事務所",license:"CC-BY-4.0",encoding:"UTF-8 BOM",retrievedAt:"2026-08-22",verifiedAt:"2026-08-22",catalogMetadataUpdatedAt:"2025-12-12",updateFrequency:"随時",snapshot:true,recordCount:482,noteCount:172,sourceColumns:columns,normalizerVersion:1,rawSha256:sha},records};
await writeFile("src/lib/data/generated/garbage-sorting.json", JSON.stringify(snapshot, null, 2) + "\n");
console.log(`shinjuku-garbage-sorting: ${records.length} ${sha}`);
