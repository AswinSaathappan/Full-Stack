let arr1 = [];
let arr2 = [];

function add_grade() {
  let name = document.getElementById("input1").value;

  let marks = parseInt(document.getElementById("input2").value);

  if (name === "") {
    alert("Please enter a name.");
    return;
  }
  
  if (isNaN(marks) || marks < 1 || marks > 100) {
    alert("Please enter a valid grade between 1 and 100.");
    return;
  }

  arr1.push(name);
  arr2.push(marks);

  display_grades();
}

function display_grades() {
  let output = "Grades:<br>";
  let total = 0;
  let highest = -Infinity;
  let lowest = Infinity;
  let grade;
  for (let i = 0; i < arr1.length; i++) {
    let marks = arr2[i];
    let grade;

    if (marks >= 90) {
      grade = "O";
    } else if (marks >= 80 && marks < 90) {
      grade = "A";
    } else if (marks >= 70 && marks < 80) {
      grade = "B";
    } else if (marks >= 60 && marks < 70) {
      grade = "C";
    } else if (marks >= 50 && marks < 60) {
      grade = "D";
    } else {
      grade = "U";
    }
    output += arr1[i] + ":" + marks + " (" + grade + ")<br>";
    total += marks;
    highest = Math.max(highest, marks);
    lowest = Math.min(lowest, marks);
  }
  let average = arr2.length > 0 ? (total / arr1.length).toFixed(2) : 0;

  output += "<br>Average: " + average;
  output += "<br>Highest: " + highest;
  output += "<br>Lowest: " + lowest;

  document.getElementById("result").innerHTML = output;
  
  let resultdiv = document.getElementById("result");    
  resultdiv.style.display = "block";    
  resultdiv.style.backgroundColor = "rgb(193,188,188"; 
  resultdiv.style.border = "1px solid black"; 
}