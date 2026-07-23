const expeFunc = (v1, v2) => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(v1 * v2);
  return v1 * v2;
};

// console.time("first");
// expeFunc(100, 300);
// console.timeEnd("first");

const memoize = function (fn) {
  const cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key] === undefined) {
      cache[key] = fn.call(this, ...args);
    }
    return cache[key];
  };
};

const memoFunc = memoize(expeFunc);

console.time("first");
memoFunc(100, 300);
console.timeEnd("first");

console.time("second");
memoFunc(100, 300);
console.timeEnd("second");
