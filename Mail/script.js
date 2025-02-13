
// Create a list of emails of people invited to the party

let invited_people = ["davide.morisco@gmail.com", "luca.luca@gmail.com", "fabio.fabio@gmail.com", "lorem.lorem@lorem.com", "ipsum.ipsum@ipsum.com"]
console.log(invited_people);

// Ask the user their email, and check if it's in the invited people list

let user_email = prompt("Insert your email here: (Please use a valid format like 'lorem.ipsum@gmail.com")
let user_status = false
for (let i = 0; i < invited_people.length; i++) {
  let this_email = invited_people[i]
  if (this_email == user_email) {
    user_status = true
  }
}

// Print a message that says the outcome of the verification check

if (user_status == true) {
  console.log(`Congratulations your email: ${user_email} is on the invited people's list.`);
}
else if (user_status == false) {
  console.log(`Sorry, it appears the email : ${user_email} is not on the invited people's list.`);
}























