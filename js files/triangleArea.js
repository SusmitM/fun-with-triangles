const sideOne = document.querySelector("#sideOne");
const sideTwo = document.querySelector("#sideTwo");
const sideThree = document.querySelector("#sideThree");
const btnCheck = document.querySelector("#btnCheck");

function clickHandler() {
    if(sideOne.value=="" || sideTwo.value=="" || sideThree.value==""){
        output.innerText = "Enter all the fields";
    }

    else if(sideOne.value<0 || sideTwo.value<0 || sideThree.value<0){
        output.innerText = "Sides cannot be Negative";
    }
    else{
        if (
            parseInt(sideOne.value) + parseInt(sideTwo.value) > parseInt(sideThree.value) &&
            parseInt(sideOne.value) + parseInt(sideThree.value) > parseInt(sideTwo.value) &&
            parseInt(sideTwo.value) + parseInt(sideThree.value) > parseInt(sideOne.value)
        ) {
            var semiperi = (parseInt(sideOne.value) + parseInt(sideTwo.value) + parseInt(sideThree.value)) / 2
            const area = Math.sqrt(semiperi * (semiperi - parseInt(sideOne.value)) * (semiperi - parseInt(sideTwo.value)) * (semiperi - parseInt(sideThree.value))).toFixed(4);
            output.innerText = `Area of a triangle using heron's formula is ${area} units`;
        } else {
            output.innerText = "Enter valid sides of a triangle";
        }

    }
   
}
btnCheck.addEventListener("click", clickHandler)