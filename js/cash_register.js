
var cashRegister = (function(){
  var count = 0;

  var display = document.getElementById("display");
  var display1 = document.getElementById("display1");
  var numButtons = document.getElementsByClassName("numBut");
  var addButton = document.getElementById("add");
  var subButton = document.getElementById("subtract");
  var multiButton = document.getElementById("multiply");
  var divideButton = document.getElementById("divide");
  var equalButton =  document.getElementById("equals");
  var clearButton = document.getElementById("clear");
  var getBalance = document.getElementById("balance");
  var depositButton = document.getElementById("deposit");
  var withdrawButton = document.getElementById("withdraw");

  for(var i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener("click", showNumber);
  }

  clearButton.addEventListener("click", clearDisplay);
  getBalance.addEventListener("click", showBalance);
  addButton.addEventListener("click", addition);
  subButton.addEventListener("click", subtraction);
  multiButton.addEventListener("click", multiplication);
  divideButton.addEventListener("click", division);
  equalButton.addEventListener("click", displayTotal);
  depositButton.addEventListener("click", deposit);
  withdrawButton.addEventListener("click", withdraw);

  console.log(Calculator.getTotal());

  function displayTotal(){
    Calculator.getTotal();
    display.innerHTML = Calculator.getTotal();
  }

  function addition(){
    var test = parseFloat(display.innerHTML);
    var myVar = Calculator.add(test);
    display.innerHTML = myVar;
    count = 1;
  }

  function subtraction(){
    var test = parseFloat(display.innerHTML);
    var myVar = Calculator.subtract(test);
    display.innerHTML = myVar;
    count = 1;
  }

  function multiplication(){
    var test = parseFloat(display.innerHTML);
    var myVar = Calculator.multiply(test);
    display.innerHTML = myVar;
    count = 1;
  }

  function division(){
    var test = parseFloat(display.innerHTML);
    var myVar = Calculator.divide(test);
    count = 1;
  }

  function clearDisplay(){
    display.innerHTML = Calculator.clearTotal();
  }

  function showBalance(){
    var newBalance = Calculator.getBalance();
    display.innerHTML = newBalance;
  }

  function showNumber(){
    if(count === 0){
      display.innerHTML += this.innerHTML;
    }else if(count === 1){
      display.innerHTML = 0;
      display.innerHTML += this.innerHTML;
      count = 0;
    }
  }

  function deposit(){
    var test = parseFloat(display.innerHTML);
    Calculator.deposit(test);
    display.innerHTML = 0;
  }

  function withdraw(){
    var test = parseFloat(display.innerHTML);
    Calculator.withdraw(test);
    display.innerHTML = 0;
  }







})();