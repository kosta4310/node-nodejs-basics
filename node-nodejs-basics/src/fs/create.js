import fs from 'fs';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const create = async () => {

    fs.writeFile(path.resolve(__dirname, './files/fresh.txt',), 'I am fresh and young', { flag: 'wx' }, (err) => {
        if (err && err.code !== 'EEXIST') {
            console.log(err);
        } else if (err && err.code === 'EEXIST') {
            throw new Error('FS operation failed');
        };
    });

};
create();