import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const assetDirs = [
  path.join(root, 'attached_assets'),
  path.join(root, 'artifacts/ab-drainage/src/assets'),
  path.join(root, 'artifacts/ab-drainage/public'),
];

const logos = {
  construction: 'AB-Construction-300x54_1783288669800.png',
  fencing: 'AB-Fencing-300x56_1783288689329.png',
  facilities: 'AB-Facilities-scaled-1-300x52_1783288632041.png',
};

const outDir = path.join(root, 'artifacts/ab-drainage/public');

function findFile(filename) {
  for (const dir of assetDirs) {
    const fullPath = path.join(dir, filename);
    if (fs.existsSync(fullPath)) return fullPath;
  }
  return null;
}

for (const [division, filename] of Object.entries(logos)) {
  const src = findFile(filename);
  if (!src) {
    console.error(`Could not find ${filename}`);
    continue;
  }

  const meta = await sharp(src).metadata();
  const size = meta.height;

  const outPath = path.join(outDir, `favicon-${division}.png`);
  await sharp(src)
    .extract({ left: 0, top: 0, width: size, height: size })
    .resize(64, 64)
    .png()
    .toFile(outPath);

  console.log(`Created ${outPath}`);
}
