var quizForm =document.querySelector(".quizForm");
var btnSubmit=document.querySelector("#btnCheck");
const answers=["90°",
"right angled",
"one right angle",
"12, 16, 20",
"Equilateral triangle",
"100°",
"30°",
"a + b + c",
"no",
"45°",];

function clickHandler(){
   let score=0;
     index=0;
    var formData = new FormData(quizForm);
    for(let value of formData.values()){
       
        if(value===answers[index]){
            score=score+1;
        }
        index = index+1;
    }
    console.log(score);
}
btnSubmit.addEventListener("click",clickHandler);
