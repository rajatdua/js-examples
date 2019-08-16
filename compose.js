const multiplyBy5 = x => x * 5;
const add = (a, b) => a + b;

const compose = (...fns) => fns.reduce((acc, curr) => (...args) => acc(curr(...args)));

const result = compose(
  multiplyBy5,
  add
);

console.log(result(10, 10));
