const baseVal = document.querySelector("#baseValue");
const heightVal = document.querySelector("#heightValue");
const btnCheck = document.querySelector("#btnCheck");


function clickHandler() {
    if(baseVal.value=="" || heightVal.value==""){
        output.innerText = "Enter all fields";
    }

   else if(baseVal.value < 0 || heightVal.value < 0){
        output.innerText = "Enter Positive Values Only!!!";
    }
    else{
        var result = Math.sqrt(parseInt(baseVal.value) * parseInt(baseVal.value) + parseInt(heightVal.value) * parseInt(heightVal.value)).toFixed(2);
    output.innerText = "The length of hypotenuse is" + " " + result;


    }

    
}
btnCheck.addEventListener("click", clickHandler);