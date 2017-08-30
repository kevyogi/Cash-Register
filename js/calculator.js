console.log("sanity check");

var Calculator = (function(){
  var total = 0;
  var balance = 0;

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

  function getTotal(){
    return total;
  }

  function clearTotal(){
    total = 0;
    return total;
  }

  function getBalance(){
    return balance;
  }

  function clearBalance(){
    balance = 0;
    return balance;
  }

  function deposit(num){
    balance += num;
    return balance;
  }

  function withdraw(num){
    balance -= num;
    return balance;
  }

  return {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    getTotal: getTotal,
    clearTotal: clearTotal,
    getBalance: getBalance,
    clearBalance: clearBalance,
    deposit: deposit,
    withdraw: withdraw
  };

});