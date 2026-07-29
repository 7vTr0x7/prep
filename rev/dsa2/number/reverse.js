const reverse = (n) => {
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    rev = rev * 10 + rem;
  }

  return rev;
};

console.log(reverse(365));
