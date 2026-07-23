const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1 failed");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3");
  }, 3000);
});

Promise.newAllSettle = (promises) => {
  return new Promise((resolve, reject) => {
    let settled = [];
    let settledCount = 0;

    if (!promises.length) {
      resolve(settled);
      return;
    }

    promises.forEach((prm, ind) => {
      Promise.resolve(prm)
        .then((d) => {
          settled[ind] = d;
        })
        .catch((e) => {
          settled[ind] = e;
        })
        .finally(() => {
          settledCount += 1;

          if (settledCount === promises.length) {
            resolve(settled);
          }
        });
    });
  });
};

const all = Promise.newAllSettle([p1, p2, p3]);

all
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
