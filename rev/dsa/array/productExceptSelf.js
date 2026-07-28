const productExceptSelf = (arr) => {
  let result = Array(arr.length).fill(1);

  let left = 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] = left;
    left *= arr[i];
  }

  let right = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= right;
    console.log(right);
    right *= arr[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
