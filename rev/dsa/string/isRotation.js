const isRotation = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  return (str1 + str1).includes(str2);
};

console.log(isRotation("abcde", "cdeab")); // true
console.log(isRotation("abcde", "deabc")); // true
console.log(isRotation("abcde", "abced")); // false
