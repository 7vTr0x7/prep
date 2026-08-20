const p1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p1");
  }, 1000);
});
const p2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("p2");
  }, 2000);
});
const p3 = new Promise((res, rej) => {
  setTimeout(() => {
    res("p3");
  }, 3000);
});

Promise.newAllsettled = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises.length === 0) return resolve([]);

    let settledPromises = [];
    let settledPromisesCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((d) => {
          settledPromises[index] = d;
        })
        .catch((e) => {
          settledPromises[index] = e;
        })
        .finally(() => {
          settledPromisesCount++;
          if (settledPromisesCount === promises.length) {
            resolve(settledPromises);
          }
        });
    });
  });
};

let settled = Promise.newAllsettled([p1, p2, p3]);

settled
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
