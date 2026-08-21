const memoize = (fn) => {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (cache[key] === undefined) {
      cache[key] = fn(...args);
    }
    return cache[key];
  };
};

const heavyFunc = (n1, n2) => {
  for (let i = 0; i < 1000000000; i++) {}

  return n1 * n2;
};

const memoized = memoize(heavyFunc);
console.time("f");
console.log(memoized(400, 500));
console.timeEnd("f");

console.time("s");
console.log(memoized(400, 500));
console.timeEnd("s");
