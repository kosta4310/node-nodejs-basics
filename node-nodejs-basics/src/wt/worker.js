import { resolve } from 'path';
import { workerData, parentPort } from 'worker_threads';


export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);


export const sendResult = () => {
    let res = { status: 'error', data: null };
    
    try {
        let fib;
        // Раскомментируйте нижележащий закоментированный код, чтобы создать случайные ошибки,
        //  а строку 19 - закоментируйте
        // let random = Math.random();
        // if (random > 0.5) {
        //     
        // } else throw new Error('Error');
        fib = nthFibonacci(workerData);/*эту закоментировать*/
        res.status = 'resolved';
        res.data = fib;
    } catch (error) {
        throw error;
    } finally {
         parentPort.postMessage(`${JSON.stringify(res)}`);
    }
    
};
sendResult();
