import {flipACoin} from "./modules/coin.mjs";
import { createRequire } from "module";
import { symlinkSync } from "fs";
const require = createRequire(import.meta.url);
// Call the coinFlip function and put the return into STDOUT
const args = require('minimist')(process.argv.slice(2));
const call = args.call || 1;
if ((call != 'heads') && (call != 'tails')) {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
} else { console.log(flipACoin(call));}