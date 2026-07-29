const anagrams = (str1, str2) => {
  if (str1.length !== str2.length) return null;

  let map = {};

  for (let i = 0; i < str1.length; i++) {
    let char = str1[i];

    if (map[char] === undefined) {
      map[char] = 1;
    } else {
      map[char] += 1;
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let char = str2[i];

    if (map[char] === undefined || map[char] === 0) {
      return false;
    }
    map[char]--;
  }

  return true;
};
console.log(anagrams("str", "str"));
