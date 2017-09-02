var cashRegister = (function(){
  var count = 0;
  var memory = [];

  var display1 = document.getElementById("display1");
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
    display.style.display = "block";
    display.style.display = "inline-block";
    var toNum = parseFloat(display.innerHTML);
    console.log(typeof toNum);
    console.log(toNum);
    if(!isNaN(toNum)){
      display1.innerHTML = "(" + display1.innerHTML + ")";
      memory.push(toNum);
      console.log(memory);
      for(var i = 0; i < memory.length; i++){
        Calculator.multiply(memory);
        Calculator.divide(memory);
        Calculator.add(memory);
        Calculator.subtract(memory);
        display.innerHTML = parseFloat(memory);
      }
    }else if(isNaN(toNum)){
      display1.innerHTML = "(" + display1.innerHTML.substring(0, (display1.innerHTML.length - 1)) + ")";
      memory.splice((memory.length - 1), 1);
      for(var p = 0; p < memory.length; p++){
        Calculator.multiply(memory);
        Calculator.divide(memory);
        Calculator.add(memory);
        Calculator.subtract(memory);
        display.innerHTML = parseFloat(memory);
      }
    }
    count = 0;
    memory = [];
  }

  function addition(){
    display.style.display = "none";
    var toNum = parseFloat(display.innerHTML);
    if(count === 0){
      memory.push(toNum, "+");
      display1.innerHTML += "+";
      display.innerHTML = "+";
    }
    console.log(memory);
    count = 1;
    console.log(count);
  }

  function subtraction(){
    display.style.display = "none";
    var toNum = parseFloat(display.innerHTML);
    if(count === 0){
      memory.push(toNum, "-");
      display1.innerHTML += "-";
      display.innerHTML = "-";
    }
    console.log(memory);
    count = 1;
  }

  function multiplication(){
    display.style.display = "none";
    var toNum = parseFloat(display.innerHTML);
    if(count === 0){
      memory.push(toNum, "x");
      display1.innerHTML += "x";
      display.innerHTML = "x";
    }
    console.log(memory);
    count = 1;
  }

  function division(){
    display.style.display = "none";
    var toNum = parseFloat(display.innerHTML);
    if(count === 0){
      memory.push(toNum, "÷");
      display1.innerHTML += "÷";
      display.innerHTML = "÷";
    }    
    console.log(memory);
    count = 1;
  }

  function clearDisplay(){
    display.style.display = "none";
    Calculator.clearTotal(memory);
    display.innerHTML = 0;
    display1.innerHTML = 0;
    count = 1;
  }

  function showBalance(){
    var newBalance = Calculator.getBalance();
    display.innerHTML = newBalance;
  }

  function showNumber(){
    display.style.display = "none";
    if(count === 0){
      display.innerHTML += this.innerHTML;
      display1.innerHTML += this.innerHTML;
      console.log(count);
    }else if(count === 1){
      display.innerHTML = "";
      display.innerHTML += this.innerHTML;
      display1.innerHTML += this.innerHTML;
      count = 0;
      console.log(count);
    }
  }

  function deposit(){
    var test = parseFloat(display.innerHTML);
    Calculator.deposit(test);
    Calculator.clearTotal(memory);
    display.innerHTML = 0;
    display1.innerHTML = 0;
    // count = 1;
  }

  function withdraw(){
    var test = parseFloat(display.innerHTML);
    Calculator.withdraw(test);
    Calculator.clearTotal(memory);
    display.innerHTML = 0;
    display1.innerHTML = 0;
    // count = 1;
  }

})();