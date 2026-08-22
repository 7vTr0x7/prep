const arr = [1, 2, 3, 4, 5];

// console.log(arr.reduce((acc, curr) => acc + curr, 0));

Array.prototype.newReduce = function (cb, intialValue) {
  if (!Array.isArray(this)) {
    throw new Error("Invalid error");
  }

  let array = this;
  let acc = intialValue ? intialValue : array[0];
  for (let i = intialValue ? 0 : 1; i < array.length; i++) {
    acc = cb(acc, array[i], i, this);
  }

  return acc;
};

console.log(arr.newReduce((acc, curr) => acc + curr));
