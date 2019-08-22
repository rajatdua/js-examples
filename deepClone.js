const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(key => {
    if (typeof obj[key] === "object") {
      clone[key] = deepClone(obj[key]);
    } else {
      clone[key] = obj[key];
    }
  });
  if (Array.isArray(obj) && obj.length) {
    clone.length = obj.length;
    return Array.from(clone);
  } else if (Array.isArray(obj)) return [];
  return clone;
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
