import { parseArgs } from "./args.js";
import { parseEnv } from "./env.js";

// Для проверки коментируйте один из вызовов функции

/*Пример node src/cli --mode production --server false*/
// parseArgs();

/*for Windows write in powershell $env: RSS_any=9; node src/cli*/
parseEnv();


