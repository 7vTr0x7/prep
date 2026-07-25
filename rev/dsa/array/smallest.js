const smallest = (arr) => {
  let small = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (small > arr[i]) {
      small = arr[i];
    }
  }

  return small;
};

console.log(smallest([4, 2, 9, 1, 5]));
