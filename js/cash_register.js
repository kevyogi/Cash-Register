
var cashRegister = (function(){
  var count = 0;

  var display = document.getElementById("display");
  var numButtons = document.getElementsByClassName("numBut");
  var numButLeft = document.getElementsByClassName("numButLeft");
  var numButRight = document.getElementsByClassName("numButRight");
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
  for(var j = 0; j < numButLeft.length; j++){
    numButLeft[j].addEventListener("click", showNumber);
  }
  for(var k = 0; k < numButRight.length; k++){
    numButRight[k].addEventListener("click", showNumber);
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

  function displayTotal(){
    Calculator.getTotal();
    display.innerHTML = Calculator.getTotal();
    count = 1;
  }

  function addition(){
    var toNum = parseFloat(display.innerHTML);
    var addNum = Calculator.add(toNum);
    display.innerHTML = addNum;
    count = 1;
  }

  function subtraction(){
    var toNum = parseFloat(display.innerHTML);
    var subNum = Calculator.subtract(toNum);
    display.innerHTML = subNum;
    count = 1;
  }

  function multiplication(){
    var toNum = parseFloat(display.innerHTML);
    var mulNum = Calculator.multiply(toNum);
    display.innerHTML = mulNum;
    count = 1;
  }

  function division(){
    var toNum = parseFloat(display.innerHTML);
    var divNum = Calculator.divide(toNum);
    display.innerHTML = divNum;
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
    Calculator.clearTotal();
    display.innerHTML = 0;
    // count = 1;
  }

  function withdraw(){
    var test = parseFloat(display.innerHTML);
    Calculator.withdraw(test);
    Calculator.clearTotal();
    display.innerHTML = 0;
    // count = 1;
  }

})();