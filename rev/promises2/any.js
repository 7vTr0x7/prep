const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p1");
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p2");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3");
  }, 3000);
});

Promise.newAny = (promises) => {
  return new Promise((resolve, reject) => {
    if (promises.length === 0)
      return reject(new AggregateError([], "All promises rejected"));

    let rejectedPromises = [];
    let rejectedPromisesCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve)
        .catch((e) => {
          rejectedPromises[index] = e;
          rejectedPromisesCount += 1;

          if (rejectedPromisesCount === promises.length) {
            reject(
              new AggregateError(rejectedPromises, "All promises rejected"),
            );
          }
        });
    });
  });
};

const any = Promise.newAny([p1, p2, p3]);

any
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
