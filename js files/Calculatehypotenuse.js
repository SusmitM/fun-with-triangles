const baseVal = parseInt(document.querySelector("#baseValue").value);
const heightVal = parseInt(document.querySelector("#heightValue").value);
const btnCheck = document.querySelector("#btnCheck");

function hypotenuseCal(baseVal, heightVal) {

}

function clickHandler() {

    var result = Math.sqrt(baseVal * baseVal + heightVal * heightVal);
    output.innerText = "The length of hypotenuse is" + " " + result;

}
    btnCheck.addEventListener("click", clickHandler);