import { add } from './calc';
//code below is actually the stuff you're getting from node.
let number = process.argv[2];

let result = add(number >> 0, 2);

console.log(result);

let post = {
  title: 'test',
  desc: 1,
};

let { title, desc } = post;

console.log(`the post desc is ${desc}`);
