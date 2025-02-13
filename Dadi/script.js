// Generate a random number between 1 and 6 for both the user and the computer

let user_random_number = Math.floor(Math.random() * 6) + 1;
let computer_random_number = Math.floor(Math.random() * 6) + 1;


// The higher number wins

if (user_random_number > computer_random_number) {
  console.log(`Congratulations your number was:${user_random_number} and the computer's was:${computer_random_number}. You've won!`);
}
else {
  console.log(`Better luck next time! your number was:${user_random_number} and the computer's was:${computer_random_number}. You've lost!`);

}














