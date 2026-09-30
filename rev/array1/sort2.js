const arr = [33, 31, 30, 44, 27, 28, 5, 12, 4, 3, 2, 1, 26, 22, 20, 18, 41];

Array.prototype.newSort = function (fn) {
  if (fn === undefined) {
    fn = (a, b) => (a - b > 0 ? 1 : a - b < 0 ? -1 : 0);
  }

  let array = this;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (fn(array[j], array[j + 1]) > 0) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }

  return array;
};

console.log(arr.newSort((a, b) => a - b));
