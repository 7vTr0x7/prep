const reverse = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

const rotate = (arr, n) => {
  n %= arr.length;

  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, n - 1);
  reverse(arr, n, arr.length - 1);

  return arr;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
