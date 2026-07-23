const obj = {
  name: "non",
};

function normal(city, state) {
  console.log(this.name, city, state);
}

// normal.call(obj, "non1", "non3");

Function.prototype.newCall = function (context, ...args) {
  context.fn = this;
  context.fn(...args);
};

normal.newCall(obj, "non1", "non4");
