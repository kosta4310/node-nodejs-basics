
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { fork, spawn } from 'child_process';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


export const spawnChildProcess = async (args) => {
    const process = fork(path.resolve(__dirname, './files/script.js'), args);
    // process.stdout.on('data', data => console.log(`stdout data: ${data}`));

        
    // process.send({ msg: 'welcome' });
    // console.log(process.channel);
};
spawnChildProcess(['git','log']);