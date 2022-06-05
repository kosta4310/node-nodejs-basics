import { unknownObject } from './cjsToEsm.mjs';
import { createMyServer } from './cjsToEsm.mjs';

console.log(unknownObject);

createMyServer.listen(8000);
// откройте браузер на вкладке localhost:8000 и вы увидете сообщение от сервера Request accepted
