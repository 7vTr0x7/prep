const arr = [1, 2, 3, 4, 5];

// console.log(arr.filter((a) => a < 3));

Array.prototype.newFilter = function (cb) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid Array");
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

console.log(arr.newFilter((a) => a < 3));
