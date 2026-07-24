const removeDuplicates = (str) => {
  let map = {};
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (map[str[i]] === undefined) {
      result += str[i];
    }

    map[str[i]] = i;
  }

  return result;
};

console.log(removeDuplicates("stringg"));
console.log(removeDuplicates("programming"));
