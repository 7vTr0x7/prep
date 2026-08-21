const arr = [1, [2, [3, [4, [5]]]]];

Array.prototype.newFlat = function (depth) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid Array");
  }

  if (depth <= 1) {
    return this;
  }

  let result = [];

  for (let key of this) {
    if (Array.isArray(key)) {
      result.push(...key.newFlat(depth - 1));
    } else {
      result.push(key);
    }
  }

  return result;
};

console.log(arr.newFlat(5));
