import { rejects } from 'assert';
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const delPath = path.resolve(__dirname, './files/fileToRemove.txt');

export const remove = async () => {
    const del = fs.rm(delPath);
    del.catch(err => {
        if (err.code === 'ENOENT') {
            throw new Error('FS operation failed');
        }
        console.log(err);
    })
};
remove();