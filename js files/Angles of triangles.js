var Angle1 = document.querySelector("#angle1");
var Angle2 = document.querySelector("#angle2");
var Angle3 = document.querySelector("#angle3");
var output = document.querySelector("#output");
const btnCheck = document.querySelector("#btnCheck");

function sumCalculator() {
    var result = parseInt(Angle1.value) +parseInt(Angle2.value) + parseInt(Angle3.value);
    return result;
}

function clickHandler() {
    var sum = sumCalculator(parseInt(Angle1.value), parseInt(Angle2.value),parseInt(Angle3.value));
    if (sum === 180) {
        output.innerText = "Yay, the angles form a triangle!";


    } else {
        output.innerText = "Oh Oh! The angle doesn't form a triangle";


    }

}
btnCheck.addEventListener("click", clickHandler);