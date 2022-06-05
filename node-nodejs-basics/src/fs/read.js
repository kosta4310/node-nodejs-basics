import { rejects } from 'assert';
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    // try {
        
                const reader = fs.readFile(path.resolve(__dirname, './files/fileToRead.txt'), {encoding: 'utf-8'});
                reader.then(data => {console.log(data)})
                .catch(error => {
                    if (error.code === 'ENOENT') {
                        throw new Error('FS operation failed');
                    }
                    console.log(error);
                })
       
    // } catch (error) {
    //     if (error.code === 'ENOENT') {
    //         throw new Error('FS operation failed');
    //     }
    //     console.log(error);
    // }
};
read();