function addition() {
    let number1 = document.getElementById("number1").value;
    number1 = Number(number1);
    let number2 = document.getElementById("number2").value;
    number2 = Number(number2);
    let output = document.getElementById("output");
    const result = number1 + number2;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
    output.innerHTML = String(result);
    
}

function subtract() {
    let number1 = document.getElementById("number1").value;
    number1 = Number(number1);
    let number2 = document.getElementById("number2").value;
    number2 = Number(number2);
    let output = document.getElementById("output");
    let result = number1 - number2;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
    output.innerHTML = String(result);

}

function multiply() {
    let number1 = document.getElementById("number1").value;
    number1 = Number(number1);
    let number2 = document.getElementById("number2").value;
    number2 = Number(number2);
    let output = document.getElementById("output");
    let result = number1 * number2;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
    output.innerHTML = String(result);
    

}

function divide() {
    let number1 = document.getElementById("number1").value;
    number1 = Number(number1);
    let number2 = document.getElementById("number2").value;
    number2 = Number(number2);
    let output = document.getElementById("output");
    let result = number1 / number2;
    if (result < 0) {
        output.style.color = "red";
    } else {
        output.style.color = "green";
    }
    output.innerHTML = String(result);

}

function exponential() {
    let number1 = document.getElementById("number1").value;
    number1 = Number(number1);
    let number2 = document.getElementById("number2").value;
    number2 = Number(number2);
    let output = document.getElementById("output");
    let result = 1;
    for(let i =0; i<number2; i++) {
        result *= number1;
    }
    if (result < 0) {
        output.style.color = red;
    } else {
        output.style.color = green;
    }
    output.innerHTML = String(result);
    

}

function clearFields() {
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "black"
}