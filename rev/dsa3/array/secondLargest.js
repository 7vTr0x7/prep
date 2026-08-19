const secondLargest = (arr) => {
  if (!arr.length) return null;
  let l = arr[0];
  let s = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > l) {
      s = l;
      l = arr[i];
    } else if (arr[i] > s && l !== arr[i]) {
      s = arr[i];
    }
  }
  return s;
};

console.log(secondLargest([10, 5, 8, 20, 15]));
console.log(secondLargest([10, 10]));
console.log(secondLargest([]));
