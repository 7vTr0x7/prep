const twoSum = (arr, t) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let key = t - arr[i];
    if (map[key] !== undefined) {
      return [arr[map[key]], arr[i]];
    }

    map[arr[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
