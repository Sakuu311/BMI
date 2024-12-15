var input1 = document.getElementById("height")
var input2 = document.getElementById("weight")
document.getElementById("btn").addEventListener("click" ,calculateBmi)
function calculateBmi(){
    var value1 = parseFloat(input1.value)
    var value2 = parseFloat(input2.value)
    var bmi = (value2/(value1*value1)).toFixed(1)
    var span = document.getElementById("bmi")
    span.innerText = bmi
//for status
    var span2 = document.getElementById("Status")

    if (bmi < 18.5){
        span2.innerText = `Underweight`
    }else if(bmi >= 18.5 && bmi <= 24.9){
       span2.innerText=`Normal weight`
    }else if(bmi >= 25 && bmi <= 29.9){
        span2.innerText=`Overweight`
    }else if (bmi >= 30){
        span2.innerText=`Obese`
    }
}