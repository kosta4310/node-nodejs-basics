import fs from 'fs/promises';
import path, { resolve } from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { fork, spawn } from 'child_process';
import { Worker } from 'worker_threads';
import { stdout } from 'process';
import  os  from 'os';
import { rejects } from 'assert';
import { stat } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathToFile = path.resolve(__dirname, './worker.js');
const numberOfCore = os.cpus().length;
let promises = [];

export const performCalculations = async () => {
    
    for (let i = 0; i < numberOfCore; i++) {
        let n = 10 + i;
        let promise = new Promise((resolve, reject) => {
            const worker = new Worker(pathToFile, {
            
            workerData: n
        });
           // console.log(`worker ${worker.threadId} is started`);
           worker.on('message', (data) => {
            resolve(data);
        });
            worker.on('error', (err) => {
                reject(err);
            });
        });
        promises.push(promise);
    }
    await Promise.allSettled(promises)
        .then(data => {
            let tempArray = [];
        data.forEach(obj => {
            tempArray.push(obj.value);
        });
            console.log(tempArray);
    });
    
};
