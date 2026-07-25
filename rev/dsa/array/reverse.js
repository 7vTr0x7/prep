const reverse = (a) => {
  for (let i = 0; i < Math.floor(a.length / 2); i++) {
    [a[i], a[a.length - 1 - i]] = [a[a.length - 1 - i], a[i]];
  }
  return a;
};

console.log(reverse([1, 2, 3, 4, 5]));
