
// Create a list of emails of people invited to the party

let invited_people = ["davide.morisco@gmail.com", "luca.luca@gmail.com", "fabio.fabio@gmail.com", "lorem.lorem@lorem.com", "ipsum.ipsum@ipsum.com"]
console.log(invited_people);

// Ask the user their email, and check if it's in the invited people list and print a message

let user_email = prompt("Insert your email here: (Please use a valid format like 'lorem.ipsum@gmail.com")

if (invited_people.includes(user_email)) {
  console.log(`Congratulations your email: ${user_email} is on the invited people's list.`);
}
else {
  console.log(`Sorry, it appears the email : ${user_email} is not on the invited people's list.`)
}

























