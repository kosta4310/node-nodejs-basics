import { resolve } from 'path';
import { workerData, parentPort } from 'worker_threads';

 
// n should be received from main thread

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);


export const sendResult = () => {
    let res = { status: 'error', data: null };
    // This function sends result of nthFibonacci computations to main thread
    try {
        let fib = nthFibonacci(workerData);
        res.status = 'resolved';
        res.data = fib;
    } catch (error) {
        throw error;
    } finally {
         parentPort.postMessage(`${JSON.stringify(res)}`);
    }
    
};
sendResult();
