let numberBox = document.querySelectorAll(".square")
console.log(numberBox)

// function inputNumber() {
//     let input = prompt("Please input a number between 1 to 9");
//     Node.innerHTML=input
// }

// let test = document.querySelector(".square")
// test.addEventListener("click",inputNumber)

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}