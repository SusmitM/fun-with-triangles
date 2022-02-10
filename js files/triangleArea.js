const sideOne = parseInt(document.querySelector("#sideOne").value);
const sideTwo = parseInt(document.querySelector("#sideTwo").value);
const sideThree = parseInt(document.querySelector("#sideThree").value);
const btnCheck = document.querySelector("#btnCheck");

function clickHandler() {
    if (
        sideOne + sideTwo > sideThree &&
        sideOne + sideThree > sideTwo &&
        sideTwo + sideThree > sideOne
    ) {
        var semiperi = (sideOne + sideTwo + sideThree) / 2
        const area = Math.sqrt(semiperi * (semiperi - sideOne) * (semiperi - sideTwo) * (semiperi - sideThree)).toFixed(4);
        output.innerText = `Area of a triangle using heron's formula is ${area} units`;
    } else {
        output.innerText = "Enter valid side lengths such that each side lengths";
    }
}
btnCheck.addEventListener("click", clickHandler)