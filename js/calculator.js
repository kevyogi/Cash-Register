

var Calculator = (function(){
  var memory = 0;
  var total = 0;
  var balance = 0;

  function setMemory(num){
    memory = num;
  }

  function add(num){
    total += num;
    return total;
  }

  function subtract(num){
    total -= num;
    return total;
  }

  function multiply(num){
    total *= num;
    return total;
  }

  function divide(num){
    total /= num;
    return total;
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
    setMemory: setMemory,
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

})();