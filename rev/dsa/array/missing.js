const missing = (arr) => {
  let n = arr.length + 1;

  let actual = 0;
  let expected = (n * (n + 1)) / 2;

  for (let i = 0; i < arr.length; i++) {
    actual += arr[i];
  }

  return expected - actual;
};

console.log(missing([2, 4, 5, 6, 1]));
