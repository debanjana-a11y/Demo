var operator = "";
var operand1 = "";
var operand2 = "";
let sum = (a, b) => a + b;
let sub = (a, b) => a - b;
let prod = (a, b) => a * b;
let div = (a, b) => {
    if (b === 0) {
        return "LOL";
    }
    return a/b;
};

let display = (S) => {
    document.getElementById("result").innerText = S;
};

let clear = () => {
    document.getElementById("result").innerText = "";
    operator = "";
    operand1 = "";
    operand2 = "";
};

let compute = () => {
    switch(operator) {
        case "+": return sum(parseInt(operand1), parseInt(operand2));
        case "-": return sub(parseInt(operand1), parseInt(operand2));
        case "X": return prod(parseInt(operand1), parseInt(operand2));
        case "/": return div(parseInt(operand1), parseInt(operand2));
    }
}

let Btn = document.querySelectorAll("button");
Btn.forEach(element => {
    element.onclick = function action () {
        // if AC is click clear all
        if (element.innerText === "AC") {
            clear();
            return;
        }
        // Find type of data
        if (isNaN(parseInt(element.innerText)) === false) {
            // If not operator then append to operand if it is empty else compute existing 
            // else if operator is clicked then save it as operator
            if (operator === "") {
                operand1 = operand1 + element.innerText;
                display(operand1);
            } else {
                operand2 = operand2 + element.innerText;
                display(operand1 + operator + operand2);
            }
        } else {
            // if operator, check if operator exists
            // If exists, then compute else put it in operator
            if (operator !== "" || element.innerText === "=") {
                operand1 = compute();
                if (element.innerText === "=") {
                    display(operand1);
                    operand2 = "";
                    operator = "";
                    return;
                }
            }
            operator = element.innerText;
            operand2 = "";
            display(operand1+operator);
        }
    };
});

