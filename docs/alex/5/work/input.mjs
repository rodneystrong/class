import add from './calc';
let number = process.argv[2];

let result = add(Number(number), 2);

console.log(result);
