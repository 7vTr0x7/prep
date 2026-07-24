const countDigits = (d) => {
  d = Math.abs(d);
  if (d === 0) return 1;
  let count = 0;

  while (d > 0) {
    d = Math.floor(d / 10);
    count++;
  }

  return count;
};

console.log(countDigits(1345));
