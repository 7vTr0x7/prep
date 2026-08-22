const arr = [3, 5, 2, 1, 7, 5, 3, 6, 3, 5, 3, 2, 4, 8, 7, 9, 5, 4, 3, 2];

Array.prototype.newSort = function (cb) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid Array");
  }

  if (typeof cb !== "function") {
    cb = (a, b) => (a > b ? 1 : a < b ? 0 : -1);
  }

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] - this[j + 1] > 0) {
        [this[j], this[j + 1]] = [this[j + 1], this[j]];
      }
    }
  }

  return this;
};

console.log(arr.newSort((a, b) => a - b));
