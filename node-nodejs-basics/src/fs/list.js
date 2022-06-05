import { rejects } from 'assert';
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const list = async () => {
    try {
        const dirents = await fs.readdir(path.join(__dirname, 'files'), { withFileTypes: true });
        dirents.forEach(dirent => {
            console.log(dirent.name);
        });
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        console.log(error);
    }
};
list();