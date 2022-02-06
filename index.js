var Angle1 = parseInt(document.querySelector("#angle1").value);
var Angle2 = parseInt(document.querySelector("#angle2").value);
var Angle3 = parseInt(document.querySelector("#angle3").value);
var output = document.querySelector("#output");
const btnCheck= document.querySelector("#btnCheck");

function sumCalculator(){
    var result =Angle1+Angle2+Angle3;
    return result;
}
function clickHandler(){
    var sum = sumCalculator(Angle1, Angle2, Angle3);
    console.log(sum);
    if(sum===180){
        output.innerText="Yay, the angles form a triangle!";
        

    }
    else{
        output.innerText="Oh Oh! The angle doesn't form a triangle";
       

    }
  
}
btnCheck.addEventListener("click", clickHandler);