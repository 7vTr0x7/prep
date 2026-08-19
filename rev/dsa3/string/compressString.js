const compressString = (s) => {
  if (s.length === 0) return null;
  let str = "";

  let count = 1;

  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) {
      count += 1;
    } else {
      str += `${s[i - 1]}${count}`;
      count = 1;
    }
  }
  return str;
};

console.log(compressString("aaabbcdddd")); // a3b2c1d4
