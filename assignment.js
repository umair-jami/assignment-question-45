//question2
let string = "Eric";

// Print a message to that person
console.log(`Hello ${string}, would you like to learn some Python today?`);



// Question 3

let  string2 = "M Umair";

// Print in lowercase
console.log(`Lowercase: ${string2.toLowerCase()}`);

// Print in uppercase
console.log(`Uppercase: ${string2.toUpperCase()}`);

// Print in title case
const titleCaseName = string2.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
console.log(`Titlecase: ${titleCaseName}`);


// Question 4


// Define the quote and its author
var quote = "That's one small step for a man, a giant leap for mankind.";
var author = "Neil Armstrong";

// Print the quote and author
console.log(author + ' once said, "' + quote + '"');


// Question 5
// Define the quote and its author
var quote = "The love of money is the root of all evil.	";
var famous_person = "the Bible";

// Compose the message
var message = famous_person + ' once said, "' + quote + '"';

// Print the message
console.log(message);


// Question 6


// Store a person's name with whitespace
var personNameWithWhitespace = "\t   M Umair\n";

// Print the name with whitespace
console.log("Name with Whitespace: '" + personNameWithWhitespace + "'");

// Remove leading and trailing whitespace and print the cleaned name
var cleanedPersonName = personNameWithWhitespace.trim();
console.log("Cleaned Name: '" + cleanedPersonName + "'");


// Queston 7

// Addition
var additionResult = 5 + 3;
console.log("Addition Result: " + additionResult);

// Subtraction
var subtractionResult = 10 - 2;
console.log("Subtraction Result: " + subtractionResult);

// Multiplication
var multiplicationResult = 4 * 2;
console.log("Multiplication Result: " + multiplicationResult);

// Division
var divisionResult = 16 / 2;
console.log("Division Result: " + divisionResult);


// Question 8


console.log(4 + 4);
console.log(10 - 2);
console.log(2 * 4);
console.log(16 / 2);



// Question 9


// Store your favorite number in a variable
var favoriteNumber = 42;

// Create a message revealing your favorite number
var message = "My favorite number is: " + favoriteNumber;

// Print the message
console.log(message);


// Question 10


// My Name is Umair
// Date: 2024-02-16

// Store your favorite number in a variable
var favoriteNumber = 42;

// Create a message revealing your favorite number
var message = "My favorite number is: " + favoriteNumber;

// Print the message
console.log(message);



// My Name is Umair
// Date: 2024-02-16

// Addition
console.log(4 + 4);

// Subtraction
console.log(10 - 2);

// Multiplication
console.log(2 * 4);

// Division
console.log(16 / 2);

// Date: 2024-02-16

// Addition
console.log(4 + 4);

// Subtraction
console.log(10 - 2);

// Multiplication
console.log(2 * 4);

// Division
console.log(16 / 2);



// Question 11
// Store names in an array
var names = ["Akram", "Umar", "Ahmad", "Maki"];

// Print each person's name one at a time
console.log("Friend 1: " + names[0]);
console.log("Friend 2: " + names[1]);
console.log("Friend 3: " + names[2]);
console.log("Friend 4: " + names[3]);


// Question 12
// Store names in an array
var names = ["Akram", "Umar", "Ali", "Ahmad"];

// Print personalized messages for each person
console.log("Hey " + names[0] + ",  have a great day!");
console.log("Hey " + names[1] + ", Nice to meet you!");
console.log("Hey " + names[2] + ", good evening!");
console.log("Hey " + names[3] + ", good morning!");


// Question 13



// List of favorite cars
var favoriteCars = ["Tesla Model S", "Honda Civic", "BMW M3", "Ford Mustang"];

// Print statements about each car
console.log("I would like to own a " + favoriteCars[0] + ".");
console.log("I would love to drive a " + favoriteCars[1] + ".");
console.log("Cruising in a " + favoriteCars[2] + " would be amazing!");
console.log("Dreaming of owning a " + favoriteCars[3] + ".");

// Question 14

// List of people to invite to dinner
var dinnerGuests = ["AKram", "UMar", "Maki"];

// Print invitation messages
console.log("Dear " + dinnerGuests[0] + ",\n\tYou are invited to dinner. We would love to have your brilliant mind at the table!");

console.log("Dear " + dinnerGuests[1] + ",\n\tYou are invited to dinner. Your pioneering work in computer science inspires us!");

console.log("Dear " + dinnerGuests[2] + ",\n\tYou are invited to dinner. Your leadership and dedication to justice are truly remarkable!");


// Question 15

var dinnerGuests = ["AKram", "UMar", "Maki"];

// Print invitation messages
console.log("Dear " + dinnerGuests[0] + ",\n\tYou are invited to dinner. We would love to have your brilliant mind at the table!");

console.log("Dear " + dinnerGuests[1] + ",\n\tYou are invited to dinner. Your pioneering work in computer science inspires us!");

console.log("Dear " + dinnerGuests[2] + ",\n\tYou are invited to dinner. Your leadership and dedication to justice are truly remarkable!");

// Guest who can't make it
var cantMakeItGuest = dinnerGuests[1];
console.log(cantMakeItGuest + " can't make it to the dinner.");

// Replace the guest who can't make it with a new invitee
dinnerGuests[1] = "ALi";

// Print new invitation message
console.log("Dear " + dinnerGuests[1] + ",\n\tYou are invited to dinner. Your contributions to science are outstanding!");

// Print second set of invitation messages for each person who is still in the list
console.log("Dear " + dinnerGuests[0] + ",\n\tWe look forward to seeing you at dinner!");

console.log("Dear " + dinnerGuests[2] + ",\n\tWe are excited to have you join us for dinner!");


// Question 16


// List of people to invite to dinner
var dinnerGuests = ["AKram", "UMar", "Maki"];

// Print invitation messages
console.log("Dear " + dinnerGuests[0] + ",\n\tYou are invited to dinner. We would love to have your brilliant mind at the table!");

console.log("Dear " + dinnerGuests[1] + ",\n\tYou are invited to dinner. Your pioneering work in computer science inspires us!");

console.log("Dear " + dinnerGuests[2] + ",\n\tYou are invited to dinner. Your leadership and dedication to justice are truly remarkable!");

// Guest who can't make it
var cantMakeItGuest = dinnerGuests[1];
console.log(cantMakeItGuest + " can't make it to the dinner.");

// Replace the guest who can't make it with a new invitee
dinnerGuests[1] = "Ali";

// Print new invitation message
console.log("Dear " + dinnerGuests[1] + ",\n\tYou are invited to dinner. Your contributions to science are outstanding!");

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table. More space is available!");

// Add new guests to the array
dinnerGuests.unshift("Hassnain"); // Add at the beginning
dinnerGuests.splice(2, 0, "Hamza"); // Add in the middle
dinnerGuests.push("Bhatti"); // Add at the end using push

// Print new set of invitation messages for each person in the list
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ",\n\tWe look forward to seeing you at dinner!");
}


// Question 17

// List of people to invite to dinner
var dinnerGuests = ["AKram", "UMar", "Maki"];

// Print invitation messages
console.log("Dear " + dinnerGuests[0] + ",\n\tYou are invited to dinner. We would love to have your brilliant mind at the table!");

console.log("Dear " + dinnerGuests[1] + ",\n\tYou are invited to dinner. Your pioneering work in computer science inspires us!");

console.log("Dear " + dinnerGuests[2] + ",\n\tYou are invited to dinner. Your leadership and dedication to justice are truly remarkable!");

// Guest who can't make it
var cantMakeItGuest = dinnerGuests[1];
console.log(cantMakeItGuest + " can't make it to the dinner.");

// Replace the guest who can't make it with a new invitee
dinnerGuests[1] = "Ali";

// Print new invitation message
console.log("Dear " + dinnerGuests[1] + ",\n\tYou are invited to dinner. Your contributions to science are outstanding!");

// Inform about the bigger dinner table
console.log("Great news! We found a bigger dinner table. More space is available!");

// Add new guests to the array
dinnerGuests.unshift("Hassnain"); // Add at the beginning
dinnerGuests.splice(2, 0, "Hamza"); // Add in the middle
dinnerGuests.push("Bhatti"); // Add at the end using push



// Print new set of invitation messages for each person in the list
for (var i = 0; i < dinnerGuests.length; i++) {
    console.log("Dear " + dinnerGuests[i] + ",\n\tWe look forward to seeing you at dinner!");
}

// Inform that only two people can be invited
console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");

// Remove guests until only two names remain in the list
while (dinnerGuests.length > 2) {
    var removedGuest = dinnerGuests.pop();
    console.log("Sorry, " + removedGuest + ", we can't invite you to dinner.");
}

// Print a message to each of the two people still on the list
for (var j = 0; j < dinnerGuests.length; j++) {
    console.log("Dear " + dinnerGuests[j] + ",\n\tYou're still invited to dinner!");
}

// Remove the last two names from the list
dinnerGuests.pop();
dinnerGuests.pop();

// Print the list to ensure it's empty
console.log("Remaining Guests: " + dinnerGuests);


// Question 18


// List of places to visit in Pakistan
var placesToVisit = ["karachi", "lahore", "islamabad", "skardu", "swat"];

// Print array in its original order
console.log("Original Order: " + placesToVisit);

// Print array in alphabetical order without modifying the original list
console.log("Alphabetical Order: " + [...placesToVisit].sort());

// Show that the array is still in its original order
console.log("Original Order (after sorting): " + placesToVisit);

// Print array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order: " + [...placesToVisit].sort().reverse());

// Show that the array is still in its original order
console.log("Original Order (after reverse sorting): " + placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();

// Print array to show the order has changed
console.log("Reversed Order: " + placesToVisit);

// Reverse the order of the list again
placesToVisit.reverse();

// Print array to show it's back to its original order
console.log("Original Order (after reversing again): " + placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();

// Print array to show the order has changed
console.log("Alphabetical Order (after sorting): " + placesToVisit);

// Sort the array in reverse alphabetical order
placesToVisit.sort().reverse();

// Print array to show the order has changed
console.log("Reverse Alphabetical Order (after sorting): " + placesToVisit);

// Question 19


// Assuming you have a guestList array from Exercise 14
let guestList = ["AKram", "UMar", "Maki"];
// Print the number of people you are inviting to dinner
console.log(`You are inviting ${guestList.length} people to dinner.`);

// Use the list to print a message inviting each person to dinner
guestList.forEach(person => {
    console.log(`Dear ${person},\n\tYou are invited to dinner. It would be an honor to have you join us.\n`);
});


// Question 20
// Creating an array of countries
var countries = ['Pakistan', 'Palestine', 'Australia', 'TUrkey', 'Brazil', 'France', 'Iraq'];

// Logging the array to the console
console.log(countries);





