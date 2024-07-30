const obj = {
  name: "Billy",
  sing: function () {
    this.age = "20";
    console.log("a", this); // outputs obj, age, sing
    var anotherFunction = function () {
      this.age = "30";
      console.log("b", this); // outputs window object with age property
    };
    anotherFunction();
  },
};

obj.sing();
