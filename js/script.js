let buttons = document.querySelector(".buttonSection").children;
let display = document.querySelector(".display");


let firstVal = 0;
let secondVal = 0;
let total = 0;
let displayNumbers = "";

buttons[0].addEventListener("click", () => {
    displayNumbers += 1;
    display.textContent = displayNumbers;
    console.log(displayNumbers);
});

buttons[1].addEventListener("click", () => {
    display.textContent += 2;
    console.log("Test");
});


buttons[15].addEventListener("click", () => {
    firstVal = displayNumbers;
    operate("*");
});

add = (...args) => {
    args.reduce((previous, current) => {
        total = previous + current;
        console.log(total);
    });
}

subtract = (valueOne, valueTwo) => {
    total = valueOne - valueTwo;
    console.log(total);

}

multiply = (valueOne, valueTwo) => {
    total = valueOne * valueTwo;
    console.log(total);

}

divide = (valueOne, valueTwo) => {
    total = valueOne / valueTwo;
    console.log(total);

}

operate = (operator, ...args) => {
    switch (operator) {
        case "+":
            add(...args);
            break;
        case "-":
            subtract(...args);
            break;
        case "*":
            multiply(...args);
            break;
        case "/":
            divide(...args);
            break;
        default:
    }

}

console.log(buttons);
console.log(display);