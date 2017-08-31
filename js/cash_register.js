
var cashRegister = (function(){
  var count = 0;
  var memory = [];

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
    var toNum = parseFloat(display.innerHTML);
    memory.push(toNum);
    console.log(memory);
    var result = 0;
    for(var i = 0; i < memory.length; i++){
      for(var j = 0; j < memory.length; j++){
        if(memory[i] === "x"){
          memory.splice((i-1), 3, (memory[i-1] * memory[i+1]));
          console.log(memory);
        }else if(memory[i] === "-"){
          memory.splice((i-1), 3, (memory[i-1] - memory[i+1]));
          result = memory[i-1] - memory[i+1];
          console.log(memory);
        }else if(memory[i] === "+"){
          memory.splice((i-1), 3, (memory[i-1] + memory[i+1]));
          console.log(memory);
        }else if(memory[i] === "÷"){
          memory.splice((i-1), 3, (memory[i-1] / memory[i+1]));
          console.log(memory);
        }
      }
      
      display.innerHTML = parseFloat(memory);
    }
    // Calculator.getTotal();
    // display.innerHTML = Calculator.getTotal();
    count = 1;
    memory = [];
  }

  function addition(){
    var toNum = parseFloat(display.innerHTML);
    memory.push(toNum);
    memory.push("+");
    console.log(memory);
    // var addNum = Calculator.add(toNum);
    // display.innerHTML = addNum;
    count = 1;
  }

  function subtraction(){
    var toNum = parseFloat(display.innerHTML);
    memory.push(toNum);
    memory.push("-");
    console.log(memory);
    // var subNum = Calculator.subtract(toNum);
    // display.innerHTML = subNum;
    count = 1;
  }

  function multiplication(){
    var toNum = parseFloat(display.innerHTML);
    memory.push(toNum);
    memory.push("x");
    console.log(memory);
    // var mulNum = Calculator.multiply(toNum);
    // display.innerHTML = mulNum;
    count = 1;
  }

  function division(){
    var toNum = parseFloat(display.innerHTML);
    memory.push(toNum);
    memory.push("÷");
    console.log(memory);
    // var divNum = Calculator.divide(toNum);
    // display.innerHTML = divNum;
    count = 1;
  }

  function clearDisplay(){
    display.innerHTML = Calculator.clearTotal();
    memory = [];
  }

  function showBalance(){
    var newBalance = Calculator.getBalance();
    display.innerHTML = newBalance;
  }

  function showNumber(){
    if(count === 0){
      display.innerHTML += this.innerHTML;
    }else if(count === 1){
      display.innerHTML = "";
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