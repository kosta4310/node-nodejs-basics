import fs from 'fs';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import  { createUnzip }  from 'zlib';

import { Transform } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToReadFile = path.resolve(__dirname, './files/archive.gz');
const pathToWriteFile = path.resolve(__dirname, './files/fileToCompress.txt');
const dc = createUnzip();
const rs = fs.createReadStream(pathToReadFile);
const ws = fs.createWriteStream(pathToWriteFile);


export const decompress = async () => {
    rs
        .pipe(dc)
        .pipe(ws)
    .on('error', (err) => {console.log(`I catch Error ${err}`)})
};
decompress();