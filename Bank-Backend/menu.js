const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome, To Banking Application. ");
console.log("\n Enter Your Choise");
console.log("\n 1. Create New Account");
console.log("\n 2. Deposit Money");
console.log("\n 3. Withdraw Money");
console.log("\n 4. Check Balance");
console.log("\n 5. Transfer Money");
console.log("\n 6. Exit");

rl.question("\n Enter Your Choice : ", (ch) => {
  console.log(`You entered ${ch}`);
});
