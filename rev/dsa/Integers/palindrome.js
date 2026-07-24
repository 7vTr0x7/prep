const palindrome = (n) => {
  let r = n;
  let rev = 0;

  while (r > 0) {
    let rem = r % 10;
    r = Math.floor(r / 10);
    rev = rev * 10 + rem;
  }

  return n === rev;
};

console.log(palindrome(202));
