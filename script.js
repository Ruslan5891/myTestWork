"use strict";

let firstInput = document.querySelector(".firstInput");
let secondInput = document.querySelector(".secondInput");
let select = document.querySelector("select");
let button = document.querySelector("button");

button.addEventListener("click", (event) => {
    event.preventDefault();

    let firstValue = firstInput.value;
    let secondValue = secondInput.value;
    let selectValue = select.value;
    
    if (firstValue.length === 0 || secondValue.length === 0) {
        alert("Необходимо заполнить каждое поле!!!");
        return;
    } else {
        firstValue = parseInt(Number(firstInput.value));
        secondValue = parseInt(Number(secondInput.value));
    }

    if (!Number.isSafeInteger(firstValue)) {
        alert("Введенные вами данные в первом поле не являются числом, либо превышают допустимое значение");
        return;
    }
    if (!Number.isSafeInteger(secondValue)) {
        alert("Введенные вами данные во втором поле не являются числом, либо превышают допустимое значение");
        return;
    }
    if (selectValue === "+") {
        alert(`Cумма ваших чисел равна: ${firstValue + secondValue}`);
    } else if (selectValue === "-") {
        alert(`Разница ваших чисел равна: ${firstValue - secondValue}`);
    } else if (selectValue === "*") {
        alert(`Произведение ваших чисел равно: ${firstValue * secondValue}`);
    } else if (selectValue === "/") {
        alert(`Деление первого на второе будет равно:  ${parseInt(firstValue / secondValue)}`);
    }
});
