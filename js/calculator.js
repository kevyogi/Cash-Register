

var Calculator = (function(){
  var balance = 0;


  function add(arr){
    for(var p = 0; p < arr.length; p++){
      if(arr[p] === "+"){
      arr.splice((p-1), 3, (arr[p-1] + arr[p+1]));
      }
    }
  }

  function subtract(arr){
    for(var p = 0; p < arr.length; p++){
      if(arr[p] === "-"){
      arr.splice((p-1), 3, (arr[p-1] - arr[p+1]));
      }
    }
  }

  function multiply(arr){
    for(var p = 0; p < arr.length; p++){
      if(arr[p] === "x"){
      arr.splice((p-1), 3, (arr[p-1] * arr[p+1]));
      }
    }
  }

  function divide(arr){
    for(var p = 0; p < arr.length; p++){
      if(arr[p] === "÷"){
      arr.splice((p-1), 3, (arr[p-1] / arr[p+1]));
      }
    }
  }

  function setTotal(num){
    total = num;
  }

  function getTotal(){
    return memory;
  }

  function clearTotal(arr){
    arr = [];
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
    setTotal: setTotal,
    getTotal: getTotal,
    clearTotal: clearTotal,
    getBalance: getBalance,
    clearBalance: clearBalance,
    deposit: deposit,
    withdraw: withdraw
  };

})();