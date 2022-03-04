const baseVal = document.querySelector("#baseValue");
const heightVal = document.querySelector("#heightValue");
const btnCheck = document.querySelector("#btnCheck");


function clickHandler() {

    var result = Math.sqrt(parseInt(baseVal.value) * parseInt(baseVal.value) + parseInt(heightVal.value) * parseInt(heightVal.value));
    output.innerText = "The length of hypotenuse is" + " " + result;

}
btnCheck.addEventListener("click", clickHandler);