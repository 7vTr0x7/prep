const mergeSortedArrays = (arr1, arr2) => {
  let i = 0;
  let j = 0;

  let merged = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    }

    if (arr2[j] < arr1[i]) {
      merged.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    merged.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    merged.push(arr2[j]);
    j++;
  }

  return merged;
};

console.log(mergeSortedArrays([1, 3, 5, 7], [2, 4, 6, 8]));
