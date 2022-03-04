const sideOne = document.querySelector("#sideOne");
const sideTwo = document.querySelector("#sideTwo");
const sideThree = document.querySelector("#sideThree");
const btnCheck = document.querySelector("#btnCheck");

function clickHandler() {
    if (
        parseInt(sideOne.value) + parseInt(sideTwo.value) > parseInt(sideThree.value) &&
        parseInt(sideOne.value) + parseInt(sideThree.value) > parseInt(sideTwo.value) &&
        parseInt(sideTwo.value) + parseInt(sideThree.value) > parseInt(sideOne.value)
    ) {
        var semiperi = (parseInt(sideOne.value) + parseInt(sideTwo.value) + parseInt(sideThree.value)) / 2
        const area = Math.sqrt(semiperi * (semiperi - parseInt(sideOne.value)) * (semiperi - parseInt(sideTwo.value)) * (semiperi - parseInt(sideThree.value))).toFixed(4);
        output.innerText = `Area of a triangle using heron's formula is ${area} units`;
    } else {
        output.innerText = "Enter valid side lengths such that each side lengths";
    }
}
btnCheck.addEventListener("click", clickHandler)