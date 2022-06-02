import { rejects } from 'assert';
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

try {
  const files = await fs.readdir(path.join(__dirname, 'files_cop'), {withFileTypes: true});
  for (const file of files)
    console.log(file);
} catch (err) {
  console.error(err);
}