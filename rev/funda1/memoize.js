const heavyFunc = (n1, n2) => {
  for (let i = 0; i < 1000000000; i++) {}

  return n1 * n2;
};

console.time("f");
console.log(heavyFunc(400, 500));
console.timeEnd("f");

console.time("s");
console.log(heavyFunc(400, 500));
console.timeEnd("s");
