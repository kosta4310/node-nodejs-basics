
import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { fork, spawn } from 'child_process';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.resolve(__dirname, './files/script.js');


export const spawnChildProcess = async (args) => {

    const child_process = fork(path.resolve(__dirname, './files/script.js'), args);
    
    // Если вам не нравится скрипт с использованием fork, можете закоментировать
    // строку выше и раскоментировать строки ниже с spawn
    
    // const child_process = spawn(`node ${pathToFile}`, args, {shell: true});
    // child_process.stdout.on('data', data => { process.stdout.write(data)});
    // process.stdin.on('data', (data) => child_process.stdin.write(data));
    // child_process.on('close', () => process.exit());

};
