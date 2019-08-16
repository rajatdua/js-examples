const curry = (fn, ...args) => fn.length === args.length ? fn(...args) : curry.bind(null, fn, ...args);

const add = (a,b,c,d,e,f,g,h,i) => a+b+c+d+e+f+g+h+i;

const curried = curry(add);
  
console.log(curried(1,2,2)(4,4,3,2)(4,4))


//const res = add1.bind({ temp: 1 }, 1, 2, 2).bind({ temp: 2 }, 4, 4, 3, 2).bind({ temp: 3 }, 4, 4).apply({ temp: 4 });
