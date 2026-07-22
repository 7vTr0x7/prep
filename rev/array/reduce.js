const arr = [1, 2, 5];

// console.log(arr.reduce((acc, curr) => acc + curr));

Array.prototype.newReduce = function (cb, v) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid Array");
  }
  let acc = v ? v : this[0];

  for (let i = v ? 0 : 1; i < this.length; i++) {
    acc = cb(acc, this[i], i, this);
  }

  return acc;
};

console.log(arr.newReduce((acc, curr) => acc + curr));
