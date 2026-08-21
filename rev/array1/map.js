const arr = [1, 2, 3, 4, 5, 6];

// console.log(arr.map((a) => a + 2));

Array.prototype.newMap = function (cb) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid input");
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {
    result[i] = cb(this[i], i, this);
  }

  return result;
};

console.log(arr.newMap((a) => a + 2));
