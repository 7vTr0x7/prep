const moveZeroes = (arr) => {
  let position = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[position]] = [arr[position], arr[i]];
      position++;
    }
  }

  return arr;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
