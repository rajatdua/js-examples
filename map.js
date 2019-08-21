Array.prototype.map = function(fn) {
  let transformedArray = Array.from({ length: this.length });
  for (let i = 0; i < this.length; i++) {
    transformedArray[i] = fn(this[i], i);
  }
  return transformedArray;
};

console.log([1, 2].map(item => item + 2));
