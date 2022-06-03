import fs from 'fs';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import { Transform } from 'stream';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const transformStream = new Transform({
    transform(chunk, enc, cb) {
        const modifiedChunk = chunk.toString().trim();
        const reverseChunk = modifiedChunk.split('').reverse().join('');
        cb(null, reverseChunk + '\n');
    } 
});
export const transform = async () => {
    process.stdin
        .pipe(transformStream)
        .pipe(process.stdout)
        .on('error', (err) => {console.log(`I catch Error ${error}`)});
        
};
transform();