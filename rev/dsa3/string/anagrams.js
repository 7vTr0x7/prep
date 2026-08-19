const anagrams = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  let map = {};

  for (let i = 0; i < s1.length; i++) {
    let char = s1[i];

    if (map[char] !== undefined) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    let char = s2[i];

    if (map[char] === undefined || map[char] === 0) {
      return false;
    }
    map[char]--;
  }

  return true;
};

console.log(anagrams("str", "srt"));
