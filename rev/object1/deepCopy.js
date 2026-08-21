const obj = {
  name: "non",
  address: {
    city: "m",
  },
};

const deepCopy = (obj) => {
  if (typeof obj !== "object") return obj;

  let result = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    let val = obj[key];
    result[key] = deepCopy(val);
  }

  return result;
};

const copy = deepCopy(obj);
copy.address.city = "n";
console.log(obj);
console.log(copy);
