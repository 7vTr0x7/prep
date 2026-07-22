const arr = [1, 2, 3, 4, 5];

Array.prototype.newMap = function (cb) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid array");
  }

  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i, this));
  }

  return result;
};

console.log(arr.newMap((a) => a + 2));
