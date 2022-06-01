export const parseEnv = () => {
   let environment = process.env;
   let regex = /^RSS_.*/;
   let result = '';
   for (const key in environment) {
      if (key.match(regex)) {
         const element = environment[key];
         result += `${key}=${element};`;
      }
   }
   let arr = result.split('');
   arr.pop();
   console.log(arr.join(''));
};