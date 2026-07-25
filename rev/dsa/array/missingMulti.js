const missingMulti = (arr) => {
  const map = {};
  let result = [];

  let largest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = true;

    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  for (let i = 1; i <= largest; i++) {
    if (map[i] === undefined) {
      result.push(i);
    }
  }

  return result;
};

console.log(missingMulti([2, 4, 6, 8, 9, 11]));
