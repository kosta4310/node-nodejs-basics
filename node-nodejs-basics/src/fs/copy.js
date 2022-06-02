import { rejects } from 'assert';
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const copy = async () => {
    try {
        const dirents = await fs.readdir(path.join(__dirname, 'file'), { withFileTypes: true });
       
        fs.mkdir(path.resolve(__dirname, './files_copy'))
            .catch((err) => {
                if (err.code === 'EEXIST') { throw new Error('FS operation failed') };
                console.log(err);
            });
            
        
            dirents.forEach(dirent => {
                              
                fs.readFile(path.resolve(__dirname, `./files/${dirent.name}`))
                    .then(data => {
                        fs.writeFile(path.resolve(__dirname, `./files_copy/${dirent.name}`), data);
                            
                            
                    });
                
                
         }); 
    } catch (err) {
        
            if (err.code === 'ENOENT') { throw new Error('FS operation failed') };
            console.log(err);
        
    }
};
copy();