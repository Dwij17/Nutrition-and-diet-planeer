var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Function to handle real-time BMI calculation
function calculateRealTimeBMI(){
  if(height.value && weight.value && (male.checked || female.checked)){
    countBmi(); // Trigger BMI calculation
  }
}

function countBmi(){
  var bmi = Number(weight.value) / (Number(height.value) / 100 * Number(height.value) / 100);

  var result = '';
  if(bmi < 18.55){
    result = 'Underweight';
  }else if(18.55 <= bmi && bmi <= 24.99){
    result = 'Healthy';
  }else if(25 <= bmi && bmi <= 29.99){
    result = 'Overweight';
  }else if(30 <= bmi && bmi <= 34.99){
    result = 'Obese';
  }else if(35 <= bmi){
    result = 'Extremely obese';
  }

  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = `You are <span id="comment">${result}</span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// Add event listeners to height and weight inputs for real-time calculation
height.addEventListener('input', calculateRealTimeBMI);
weight.addEventListener('input', calculateRealTimeBMI);
male.addEventListener('change', calculateRealTimeBMI);
female.addEventListener('change', calculateRealTimeBMI);
