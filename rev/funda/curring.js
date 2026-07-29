const add = (a) => {
  return (b) => {
    if (b !== undefined) {
      return add(a + b);
    }
    return a;
  };
};

console.log(add(1)(2)(3)(4)()); // 10
console.log(add(5)(10)(15)()); // 30
