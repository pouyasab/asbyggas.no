/**
 * One-off: read logo (JPEG saved as .png), make near-black background transparent, output PNG.
 */
import sharp from "sharp";
import { rename, unlink } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const input = join(root, "public", "logo-asbygg.png");
const inputBuf = await sharp(input).toBuffer();

const { data, info } = await sharp(inputBuf)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const out = Buffer.from(data);

// Gjør nesten-svarte bakgrunnspiksler gjennomsiktige (bevar mørk tekst som er lysere enn ren svart)
// Kun helt mørke piksler (typisk JPEG-bakgrunn); lysere grå i logo-tekst beholdes
const bgCutoff = 28;
for (let i = 0; i < out.length; i += 4) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  const m = Math.max(r, g, b);
  if (m <= bgCutoff) {
    out[i + 3] = 0;
  }
}

const outPath = join(root, "public", "logo-asbygg.png");
const tmpPath = join(root, "public", "logo-asbygg.tmp.png");
await sharp(out, {
  raw: { width, height, channels: 4 },
})
  .png()
  .toFile(tmpPath);

try {
  await unlink(outPath);
} catch {
  // ignore
}
await rename(tmpPath, outPath);

console.log("Wrote", outPath, { width, height });
