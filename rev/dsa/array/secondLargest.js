const secondLargest = (arr) => {
  if (arr.length < 2) return null;
  let largest = arr[0];
  let second = largest;

  for (let i = 1; i < arr.length; i++) {
    if (largest < arr[i]) {
      second = largest;
      largest = arr[i];
    } else if (second < arr[i] && largest !== arr[i]) {
      second = arr[i];
    }
  }

  return second;
};

console.log(secondLargest([10, 5, 8, 20, 15]));
console.log(secondLargest([10, 10]));
console.log(secondLargest([]));
