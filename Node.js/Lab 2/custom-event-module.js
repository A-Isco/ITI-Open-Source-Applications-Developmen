let Emitter = require("events");

let util = require("util");

function customemitter() {
  Emitter.call(this);

  this.dosomething = function () {
    console.log("in custom function");
    this.emit("greet");
  };
}
util.inherits(customemitter, Emitter);

module.exports = {
  customemitter: customemitter,
};
