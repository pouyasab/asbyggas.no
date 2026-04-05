/**
 * Gjør hvit bakgrunn gjennomsiktig ved flood fill fra bildets kanter
 * (bevarer hvitt innhold som ikke er koblet til kanten).
 *
 * Bruk: legg en ny logo som `public/logo-asbygg-src.png`, kjør `npm run logo-transparent`.
 */
import sharp from "sharp";
import { rename, unlink } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const inputPath = join(root, "public", "logo-asbygg-src.png");
const outPath = join(root, "public", "logo-asbygg.png");
const tmpPath = join(root, "public", "logo-asbygg.tmp.png");

const inputBuf = await sharp(inputPath).toBuffer();

const { data, info } = await sharp(inputBuf)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: w, height: h } = info;
const buf = Buffer.from(data);

function isNearWhite(i) {
  const r = buf[i];
  const g = buf[i + 1];
  const b = buf[i + 2];
  return r > 228 && g > 228 && b > 228;
}

function idx(x, y) {
  return (y * w + x) * 4;
}

const bg = new Uint8Array(w * h);
const q = [];

for (let x = 0; x < w; x++) {
  q.push([x, 0], [x, h - 1]);
}
for (let y = 0; y < h; y++) {
  q.push([0, y], [w - 1, y]);
}

let qi = 0;
while (qi < q.length) {
  const [x, y] = q[qi++];
  if (x < 0 || x >= w || y < 0 || y >= h) continue;
  const p = y * w + x;
  if (bg[p]) continue;
  const i = idx(x, y);
  if (!isNearWhite(i)) continue;
  bg[p] = 1;
  q.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
}

for (let p = 0; p < w * h; p++) {
  if (bg[p]) {
    buf[p * 4 + 3] = 0;
  }
}

await sharp(buf, { raw: { width: w, height: h, channels: 4 } })
  .png()
  .toFile(tmpPath);

try {
  await unlink(outPath);
} catch {
  // ignore
}
await rename(tmpPath, outPath);

console.log("Wrote", outPath, { width: w, height: h });
