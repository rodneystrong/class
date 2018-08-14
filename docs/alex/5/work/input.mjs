import add from './calc';
let number = process.argv[2];

let result = add(number >> 0, 2);

console.log(result);
