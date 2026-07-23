const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1");
  }, 10000);
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

Promise.newRace = (promises) => {
  return new Promise((res, rej) => {
    if (!promises.length) {
      resolve();
      return;
    }

    promises.forEach((p) => {
      Promise.resolve(p).then(res).catch(rej);
    });
  });
};

const all = Promise.newRace([p1, p2, p3]);

all
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log(e);
  });
