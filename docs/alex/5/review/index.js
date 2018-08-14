/*
  create an array of posts, posts need to have at least 3 fields on them
*/
let postsArray = [
  {
    name: 'aleeex',
    age: 40,
    color: 'yellow',
  },
  {
    name: 'sam',
    age: 12,
    color: 'white',
  },
  {
    name: 'zach',
    age: 25,
    color: 'brown',
  },
];
/*
 loop through the array, and console.log a field (key) on it each time
*/
postsArray.map(post => console.log(post.name));
/*
 make an array of numbers and add them together using reduce
*/
numArray = [12, 43, 10, 5538, 356];

let adder = (i, current) => i + current;

console.log(numArray.reduce(adder));
