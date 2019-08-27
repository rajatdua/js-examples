const deepClone = obj => {
  const clone = Object.assign({}, obj);
  Object.keys(obj).forEach(key => {
    if (typeof obj === "object") {
      clone[key] = deepClone(obj[key]);
    } else {
      clone = obj[key];
    }
  });
  if (Array.isArray(obj) && obj.length) {
    clone.length = obj.length;
    return Array.from(clone);
  } else if (Array.isArray(obj)) {
    return [];
  }
  return clone;
};

const temp = [
  {
    a: {
      b: {
        c: [1, 2],
        fn: {}
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

console.log(JSON.stringify(temp2, null, 2));
console.log(JSON.stringify(temp, null, 2));
