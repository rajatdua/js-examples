const multiplyBy5 = (x, y) => x * y;
const add = a => a + 9;

const compose = (...fns) => fns.reduce((acc, curr) => (...args) => curr(acc(...args)));
const compose2 = (...fns) => fns.reduceRight((acc, curr) => (...args) => acc(curr(...args)));

const result = compose(
  multiplyBy5,
  add
);

const result2 = compose2(multiplyBy5, add);

console.log(result(10, 10));
console.log(result2(10, 10));
