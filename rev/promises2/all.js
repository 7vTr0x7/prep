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

Promise.newAll = function (promises) {
  return new Promise((res, rej) => {
    if (promises.length === 0) return res([]);
    let fulfilledPromises = [];
    let fulfilledPromisesCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((d) => {
          fulfilledPromises[index] = d;
          fulfilledPromisesCount += 1;

          if (fulfilledPromisesCount === promises.length) {
            res(fulfilledPromises);
          }
        })
        .catch((e) => rej(e));
    });
  });
};

let all = Promise.newAll([p1, p2, p3]);

all
  .then((d) => {
    console.log(d);
  })
  .catch((e) => {
    console.log(e);
  });
