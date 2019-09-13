const deepClone = inputObj => {
  let copy = Array.isArray(inputObj) ? [] : {};
  Object.keys(inputObj).forEach(key => {
    const currentValue = inputObj[key];
    copy[key] = typeof currentValue === "object" ? deepClone(currentValue) : currentValue;
  });
  return copy;
};

//different approach
const clone = input => {
  if(input === null || typeof input !== "object") return input;
  const output = Array.isArray(input) ? [] : {};
    for(const key of Object.keys(input)){
      output[key] = clone(input[key])
    }
  return output;
};

const temp = [
  {
    a: {
      b: {
        c: [1, 2],
        fn: name => console.log("I am executed by", name)
      }
    },
    d: {
      e: {
        f: [3, 4]
      }
    }
  }
];

const temp2 = deepClone(temp);
temp2[0].a.b.fn = null;
temp[0].a.b.fn("temp");

console.log(JSON.stringify(temp2, null, 2));
console.log(JSON.stringify(temp, null, 2));
