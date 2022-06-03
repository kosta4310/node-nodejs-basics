import { rejects } from 'assert';
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import  crypto  from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hash = crypto.createHash('sha256');


export const calculateHash = async () => {
   
    try {
        return await new Promise((resolve, reject) => {
            resolve(
                fs.readFile(path.resolve(__dirname, './files/fileToCalculateHashFor.txt'))
                    .then(data => {
                        return hash.update(data).digest('hex');
                    
                    
                    }));
            reject(new Error('new Error'));
        })
    } catch (error) {
        if (error.code === 'ENOENT') {
            throw new Error('No such file or directory')
        }
        console.log(error);
    }
};
