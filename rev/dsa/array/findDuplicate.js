const findDuplicate = (arr) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (map[char] === undefined) {
      map[char] = i;
    } else {
      return arr[i];
    }
  }

  return 0;
};

console.log(findDuplicate([1, 3, 4, 2, 2]));
