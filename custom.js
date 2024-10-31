
function displayName(name) {
  return "Hello, " + name + "!";
}

// Function to compute two numbers (sum)
function computeTwoNumbers(num1, num2) {
  return num1 + num2;
}

// Function to prompt user for two numbers, compute their sum, and display it
function inputTwoNumbers() {
  let number1 = parseFloat(prompt("Enter the first number:"));
  let number2 = parseFloat(prompt("Enter the second number:"));
  if (!isNaN(number1) && !isNaN(number2)) {
      let result = computeTwoNumbers(number1, number2);
  } else {
      alert("Please enter valid numbers.");
  }
}

// Function to confirm submission
function confirmSubmission() {
  let confirmation = confirm("Are you sure you want to submit?");
  if (confirmation) {
      alert("Submitted successfully!");
  } else {
      alert("Submission cancelled.");
  }
}

// Function to check the grade and determine pass or fail
function checkGrade(score) {
  let grade;
  let status;

  if (score >= 90) {
      grade = "A";
      status = "Pass";
  } else if (score >= 80) {
      grade = "B";
      status = "Pass";
  } else if (score >= 70) {
      grade = "C";
      status = "Pass";
  } else if (score >= 60) {
      grade = "D";
      status = "Pass";
  } else {
      grade = "F";
      status = "Fail";
  }

  return { grade, status };
}

// Function to calculate grade and display pass/fail status
function calculateGrade() {
  let name = prompt("Enter your Name:");
  let score = parseFloat(prompt("Enter your score:"));
  let item = parseFloat(prompt("Enter number of item:"));

  let grade = -4*(score/item) + 5;
  let remark = (grade >= 3.1)? "Failed" : "Passed";
  alert("Your name is: " + name +"\nYour Total Score is: " + grade.toFixed(2) + "\nYour Remarks is: " + remark);

  document.write("<br>" + "Your name is: " + name + "<br>" +"Your Total Score is: " + grade.toFixed(2) + "<br>" +"Your Remarks is: " + remark);
  console.log("\n" + "Your name is: " + name + "\n" +"Your Total Score is: " + grade.toFixed(2) + "\n" +"Your Remarks is: " + remark);
  
  return calculateGrade;
}
