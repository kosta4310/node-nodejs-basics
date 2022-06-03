
import fs from 'fs';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
    const rs = fs.createReadStream(path.resolve(__dirname, './files/fileToRead.txt'), { encoding: 'utf-8' });
    rs.pipe(process.stdout);
};
read();