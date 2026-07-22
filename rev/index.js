const arr = [1, [2, [3, [4, [5, [6, [7, [8, 9], 6], 6], 8], 9], 0, 7]]];

Array.prototype.newFlat = function (depth) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid array");
  }

  if (depth <= 1) {
    return this;
  }

  let result = [];

  for (let v of this) {
    if (Array.isArray(v)) {
      result.push(...v.newFlat(depth - 1));
    } else {
      result.push(v);
    }
  }

  return result;
};

const depth = arr.newFlat(8);
console.log(depth);
