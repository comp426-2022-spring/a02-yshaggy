import {flipACoin} from "./modules/coin.mjs";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2));
const call = args.call || 1;

console.log(flipACoin(call));