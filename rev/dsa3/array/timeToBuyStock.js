const timeToBuyStock = (stocks) => {
  let minPrice = stocks[0];
  let maxProfit = 0;

  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i] < minPrice) {
      minPrice = stocks[i];
    }

    if (stocks[i] - minPrice > maxProfit) {
      maxProfit = stocks[i];
    }
  }

  return maxProfit;
};
console.log(timeToBuyStock([7, 1, 5, 3, 6, 4]));
