import { rejects } from 'assert';
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const rename = async () => {
    const oldPath = path.resolve(__dirname, './files/wrongFilename.txt');
    const newPath = path.resolve(__dirname, './files/properFilename.txt');

    const promise = await fs.rename(oldPath, newPath);
    console.log(promise);
};