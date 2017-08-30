console.log("sanity check");

var Calculator = (function(){
  var total = 0;
  var memory = 0;

  function add(num){
    total += num;
  }

  function subtract(num){
    total -= num;
  }

  function multiply(num){
    total *= num;
  }

  function divide(num){
    total /= num;
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide
  };

});