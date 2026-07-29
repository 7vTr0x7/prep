const twoSum = (arr, t) => {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let dep = t - arr[i];

    if (map[dep] !== undefined) {
      return [arr[i], arr[map[dep]]];
    }

    map[arr[i]] = i;
  }

  return 0;
};

console.log(twoSum([2, 7, 11, 15], 9));
