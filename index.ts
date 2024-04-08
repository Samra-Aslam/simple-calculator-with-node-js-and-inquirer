import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);
//conditional ststement
if (answer.operator === "Addition"){
  console.log(answer.firstnumber + answer.secondnumber)
} else if (answer.operator === "Substraction"){
  console.log(answer.firstnumber - answer.secondnumber)
} else if (answer.operator === "Multiplication"){
  console.log(answer.firstnumber * answer.secondnumber)
} else if (answer.operator === "Division"){
  console.log(answer.firstnumber / answer.secondnumber)
} else {
  console.log("please enter valid operators")
}
