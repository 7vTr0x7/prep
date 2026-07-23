const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
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

Promise.newAll = (promises) => {
  return new Promise((resolve, reject) => {
    let settled = [];
    let settledCount = 0;

    if (!promises.length) return resolve(settled);

    promises.forEach((prom, inx) => {
      Promise.resolve(prom)
        .then((data) => {
          settled[inx] = data;
          settledCount += 1;

          if (settledCount === promises.length) {
            resolve(settled);
          }
        })
        .catch(reject);
    });
  });
};

const all = Promise.newAll([p1, p2, p3]);

all
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
