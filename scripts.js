function buttonClickHandler(){
    let firstNumber = parseFloat(document.getElementById("First").value);
    let secondNumber = parseFloat(document.getElementById("Second").value);
    let operation =  document.getElementById("Operation");

    let result = 0.0;
    let stringResult = String(result);

    if(isNaN(firstNumber) || isNaN(secondNumber)){
        stringResult = "Input number again!"
    }
    
    switch(operation.value){
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if(secondNumber == 0){
                stringResult = "Can not div 0!"
            }
            else{
                result = firstNumber / secondNumber;
            }
            break;
    }
    if(stringResult !== "Input number again!" & stringResult !== "Can not div 0!"){
        stringResult = String(firstNumber) + " " + operation.value + " " + String(secondNumber) + " = " + String(result);
    }

    document.getElementById("Result").innerText= stringResult;
}