const add = (a) => {
  return (b) => {
    if (b !== undefined) {
      return add(a + b);
    }
    return a;
  };
};

console.log(add(10)(20)(30)());
