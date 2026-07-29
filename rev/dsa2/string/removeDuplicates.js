const removeDuplicates = (str) => {
  let map = {};
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (map[char] === undefined) {
      result += char;
    }

    map[char] = i;
  }

  return result;
};

console.log(removeDuplicates("stringg"));
console.log(removeDuplicates("programming"));
