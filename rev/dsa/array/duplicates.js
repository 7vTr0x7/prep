const duplicates = (arr) => {
  if (arr.length < 2) return null;
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (map[char] !== undefined) {
      [arr[i], arr[arr.length - 1]] = [arr[arr.length - 1], arr[i]];
      arr.pop();
      i--;
    }
    map[char] = i;
  }

  return arr;
};

console.log(duplicates([1, 2, 2, 3, 4, 4, 5]));
