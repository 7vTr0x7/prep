const twoSum = (a, t) => {
  let map = {};

  for (let i = 0; i < a.length; i++) {
    let diff = t - a[i];

    if (map[diff] !== undefined) {
      return [a[map[diff]], a[i]];
    }
    map[a[i]] = i;
  }

  return 0;
};

console.log(twoSum([2, 7, 11, 15], 9));
