function Calculator() {
  this.a = +prompt("a?", 0);
  this.b = +prompt("b?", 0);
  
  this.sum = function() { return this.a + this.b; };
  this.mul = function() { return this.a * this.b; };
};

let calculator = new Calculator();

alert( "Sum = " + calculator.sum() );
alert( "Mul = " + calculator.mul() );