const obj = {
  name: "non",
  address: {
    city: "on5",
  },
};

const deepCopy = (obj) => {
  if (typeof obj !== "object") {
    return obj;
  }

  let result = Array.isArray(obj) ? [] : {};

  for (let i in obj) {
    let v = obj[i];
    result[i] = deepCopy(v);
  }

  return result;
};

const copy = deepCopy(obj);
obj.address.city = "999";
console.log(copy);
console.log(obj);
