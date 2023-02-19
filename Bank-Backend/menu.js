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

const ip = () => {
  return new Promise((resolve, reject) => {
    rl.question("\n Enter your choice : ", (ch) => {
      resolve(ch);
    });
  });
};

const startApplication = async () => {
  while (true) {
    const choice = await ip();

    if (choice == 1) {
      console.log(` Create New Account`);
    } else if (choice == 2) {
      console.log(` Please Deposit Money`);
    } else if (choice == 3) {
      console.log(` Please Withdraw Money`);
    } else if (choice == 4) {
      console.log(` Please Check Balance`);
    } else if (choice == 5) {
      console.log(` Please Transfer Money`);
    }

    if (choice >= 6) {
      console.log(` Exiting the Application..`);
      process.exit();
    }
  }
};

startApplication();
