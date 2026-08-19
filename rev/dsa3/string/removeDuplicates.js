const removeDuplicates = (s) => {
  let map = {};
  let str = "";

  for (let i = 0; i < s.length; i++) {
    let word = s[i];
    if (map[word] === undefined) {
      str += s[i];
    }

    map[word] = i;
  }

  return str;
};

console.log(removeDuplicates("stringg"));
console.log(removeDuplicates("programming"));
