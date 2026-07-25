const largest = (a) => {
  let largestNum = a[0];

  for (let i = 1; i < a.length; i++) {
    if (largestNum < a[i]) {
      largestNum = a[i];
    }
  }

  return largestNum;
};

console.log(largest([4, 2, 9, 1, 5]));
console.log(largest([-3, -7, -1, -9]));
