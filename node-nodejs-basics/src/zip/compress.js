import fs from 'fs';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import  { createGzip }  from 'zlib';

import { Transform } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gzip = createGzip();
const pathToReadFile = path.resolve(__dirname, './files/fileToCompress.txt');
const pathToWriteFile = path.resolve(__dirname, './files/archive.gz');
const rs = fs.createReadStream(pathToReadFile);
const ws = fs.createWriteStream(pathToWriteFile);

export const compress = async () => {
    rs
        .pipe(gzip)
        .pipe(ws)
    .on('error', (err) => {console.log(`I catch Error ${err}`)})
};
compress();
