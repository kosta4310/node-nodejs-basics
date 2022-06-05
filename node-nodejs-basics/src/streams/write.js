import fs from 'fs';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
    const ws = fs.createWriteStream(path.resolve(__dirname, './files/fileToWrite.txt'));
    console.log("Для выхода нажмите Ctrl+C");
    process.stdin.pipe(ws);
};
write();