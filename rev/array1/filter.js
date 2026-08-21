const arr = [2, 3, 4, 5, 6];

Array.prototype.newFilter = function (cb) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid array");
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

console.log(arr.newFilter((a) => a > 3));
