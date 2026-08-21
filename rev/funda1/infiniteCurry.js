const add = (a) => {
  const inner = (b) => {
    return add(a + b);
  };

  inner.valueOf = () => a;
  inner.toString = () => String(a);

  return inner;
};

console.log(add(1)(2)(3)(4) + 0); // 10
console.log(add(5)(10)(15) + 0); // 30
