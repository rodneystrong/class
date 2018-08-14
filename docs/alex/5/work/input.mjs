import { add } from './calc';
//code below is actually the stuff you're getting from node.
let number = process.argv[2];

let result = add(number >> 0, 2);

console.log(result);
