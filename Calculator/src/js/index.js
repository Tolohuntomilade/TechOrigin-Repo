//selector
const output=document.querySelector(".output")
const result=document.querySelector(".result")
const keys=document.querySelectorAll("button")

//eventlistener
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate() {
    let buttonText= this.innerText;
    if (buttonText==="AC") {
        output.innerText="";
        result.innerText="0";
        return;
    }
    if(buttonText==="="){
       result.innerText= eval(output.innerText);
    }
    else{
        output.textContent+=buttonText;
        return;
    }
}




































// function getHistory(){
//     return document.getElementById("history-value").innerText;
// }
// function printHistory(){
//     return document.getElementById("history-value").innerText=num;
// }
// function getOutput(){
//     return document.getElementById("output-value").innerText;
// }
// function printOutput(num) {
//     return document.getElementById("output-value").innerText=num;
// }
// // function printOutput(num){
// //     if (num="") {
// //         document.getElementById("output-value").innerText=num;
// //     }
// //     else{
// //         document.getElementById("output-value").innerText=num;
// //     }
// // }
// // printOutput("34675");
// // function getFormattedNumber(num){
// //     var n =Number(num);
// //     var value = n.toLocaleString("en");
// //     return value
// // }
// var operator=document.getElementsByClassName("operator");
// for (var i = 0; i < operator.length; i++) {
//     operator[i].addEventListener('click',function(){
//         if (this.id=="backspace") {
//             var output;
//             if (output) {
//                 output=output.substr(0,output.length-1);
//                 printOutput(output);
                
//             }
//             printHistory("");
//             printOutput(" ");
//         }
//     }) 
// }
// var gridItem =document.getElementsByClassName("grid-item");
// for (var i = 0; i < gridItem.length; i++) {
//     gridItem[i].addEventListener('click',function(){
//         var output;
//         if (output!=NaN) {
//             output=this.id;
//             printOutput(output);
            
//         }
//     }) 
// }