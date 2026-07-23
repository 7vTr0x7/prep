const arr = [4, 3, 6, 2, 1, 7, 3, 8, 3, 9, 42, 34, 56];

// console.log(arr.sort((a, b) => a - b));

Array.prototype.newSort = function (f) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid array");
  }

  if (typeof f === "undefined") {
    f = (a, b) => (a > b ? 1 : a < b ? -1 : 0);
  }

  let arr = this;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (f(arr[j], arr[j + 1]) > 0) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};

arr.newSort((a, b) => a - b);

console.log(arr);
