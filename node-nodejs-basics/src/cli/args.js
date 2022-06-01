export const parseArgs = () => {
    let result = '';
   for (let i = 2; i < process.argv.length - 1; i++) {
        if (i % 2 === 0) {
            const element = process.argv[i].split('').slice(2).join('');
            result += `${element} is ${process.argv[i + 1]}, `;
        }
    }
    let arr = result.split('');
    arr.splice(-2,2);
    console.log(arr.join(''));
};