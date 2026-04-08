const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter first number: ", (num1) => {
  rl.question("Enter second number: ", (num2) => {
    rl.question("Choose operation (+, -, *, /): ", (op) => {

      num1 = Number(num1);
      num2 = Number(num2);

      let result;

      if (op === '+') result = num1 + num2;
      else if (op === '-') result = num1 - num2;
      else if (op === '*') result = num1 * num2;
      else if (op === '/') result = num1 / num2;
      else result = "Invalid operation";

      console.log("Result:", result);
      rl.close();

    });
  });
});