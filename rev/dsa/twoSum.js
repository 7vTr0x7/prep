const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 7;

const twoSum = (arr, t) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let c = t - arr[i];

    if (map[c] !== undefined) {
      return [arr[i], arr[map[c]]];
    }

    map[arr[i]] = i;
  }
  return [];
};

console.log(twoSum(arr, target));
