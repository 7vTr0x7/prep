const obj = {
  name: "non",
};

function normal(city, state) {
  console.log(this.name, city, state);
}

Function.prototype.newApply = function (context, args) {
  if (!Array.isArray(args)) {
    throw new Error("invalid input");
  }
  context.fn = this;
  context.fn(...args);
};

normal.newApply(obj, ["non", "09"]);
