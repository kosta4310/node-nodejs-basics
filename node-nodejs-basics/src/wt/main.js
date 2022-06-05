import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { fork, spawn } from 'child_process';
import { Worker } from 'worker_threads';
import { stdout } from 'process';
import  os  from 'os';
import { rejects } from 'assert';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.resolve(__dirname, './worker.js');
const numberOfCore = os.cpus().length;
let array = Promise.allSettled([]);

export const performCalculations = async () => {
    
    for (let i = 0; i < numberOfCore; i++) {
        let n = 10 + i;
        let promises = await new Promise((resolve, reject) => {
            const worker = new Worker(pathToFile, {
            
            workerData: n
        });
        const workerId = worker.threadId;
        console.log(`worker ${workerId} is started`);
        // worker.on('message', (data) => { console.log(`data from worker: ${data}`) });
        worker.on('message', (data) => {
            // array.push({ [workerId]: data });
            console.log(`workerId ${workerId}: ${data}`);
            resolve(data);
        });
        // worker.on('exit', (code) => {
        //     console.log(`worker ${workerId} exit ${code}`);
        //     if (array.length === numberOfCore) {
        //         console.log(array);
        //     }
        // });
            worker.on('error', (err) => {
                reject(err);
            });
        });
        (await array).push(promises);
    }
    array.then(data => console.log(data));
    
};
