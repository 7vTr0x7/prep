const timeToBuyStock = (arr) => {
  let minPrice = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minPrice) {
      minPrice = arr[i];
    }

    let profit = arr[i] - minPrice;

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};

console.log(timeToBuyStock([7, 1, 5, 3, 6, 4]));
