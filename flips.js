
import { coinFlip, coinFlips, countFlips } from "./modules/coin.mjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2))
const number = args.number || 1

const result = coinFlips(number);
console.log(result);
console.log(countFlips(result));