const myButton = document.getElementById('btn');
myButton.onclick = function () {
  const name = prompt('Enter your full name.');
  document.getElementById('name').innerText = name;
}


// Variables
const pi = 3.142;
let fullname = 'Antoinette Amedza';
let age = 219;
let present = false;
console.log(fullname);


// Objects
const car = {
  numberPlate: 'GR-345-24',
  model: 'Bentley',
  color: 'pink',
  weight: 50,
  weightUnit: 'KG',
  owner: {
    name: 'Antoinette Amedza',
    driver: {
      name: 'Kojo'
    }
  }
}
console.log(car.numberPlate);
console.log(car.model);
console.log(car.owner.name);
console.log(car.owner.driver.name);


car = {
  model: 'Porsche'
}


car.owner.driver.name = 'Elizabeth';
console.log(car.owner.driver.name);




// Arrays
const tweet1 = {
  text: 'I am learning js today.',
  likes: 5,
  shares: 2,
  retweets: 1
}

const tweet2 = {
  text: 'I am learning arrays today.',
  likes: 8,
  shares: 3,
  retweets: 0
}

const tweets = [];
tweets.push(tweet1);
tweets.push(tweet2);
tweets.length;
tweets[1];

// Dates
const today = new Date();
today.toString();
today.toLocaleDateString();
today.getHours();


// If/Else
if (true) {
  console.log('we are true');
} else {
  console.log('we are false');
}

// If/Else
if (today.getHours() >= 16) {
  console.log('class has ended!');
} else {
  console.log('class is in session!');
}



// For loop
for (let i = 0; i <= 10; i++) {
  console.log('Notify friends!', i);
}

// Functions
// Defining functions
function login(username, password) {
  if (username == 'annette' && password == '1234') {
    return 'User is logged in!';
  } else if (username != 'annette!') {
    return 'invalid username!';
  } else if (password != '1234') {
    return 'invalid password!';
  } else {
    return 'invalid username or password!';
  }
}


// Invoking functions
login('annette', '1234')


// Basic Arithmetic
12 + 34;
45 - 16;
7 * 12;
78 / 4;
78 % 4;




// comparison operators
2 === '2';
2 === 2;
3 !== 2;
3 !== 3;


// Built-in Math functions
Math.round(37 / 24);
Math.floor(37 / 24);
Math.ceil(37 / 24);
Math.random();
Math.max(78, 12, 98, 14, 89);
Math.ceil(Math.random() * 1000000);


// Order of operations
1 * 2 + 3 - 4 / 2 + 2 ** 2;




// Handling user inputs
// 1200 -'250';
// 1200 + 250;
1200 + Number('250')



// String concatenation
const firstname = 'Antoinette';
const lastname = 'Amedza';
firstname + ' ' + lastname;
// firstname.trim() + ' ' + lastname.trim();
// To trim out spaces when typing out your name;


// Template literal
`${firstname.trim()} ${lastname.trim()}`;


// String methods - to length
firstname.length;
lastname.length;
`${firstname.trim()} ${lastname.trim()}`.length;
(firstname.trim() + ' ' + lastname.trim()).length;


// String method - toUpperCase
firstname.toUpperCase();
lastname.toUpperCase();


// String method - CharAt
firstname.charAt(0);
lastname.charAt(3);
`${firstname.trim()} ${lastname.trim()}`.charAt(0);
`${firstname.trim().charAt(0)}${lastname.trim().charAt(0)}`;




// String conversion
String(2014);




// Write a function that will add a participant to our Google Classroom
const participants = [];
function addParticipant(email) {
  // check if email was provided
  if (!email) {
    return 'Email not provided!';
  }
  // Check if email is valid
  if (!email.includes('@')) {
    return 'Invalid email provided!';
  }
  // Add email to the participants;
  participants.push(email);
  // Notify them via email;
  // return response
  return 'Participant added';
}
addParticipant('anndekonor@gmail.com');




// Arrays in JavaScript
const alphabets = ['A', 'B', 'C', 'D'];
alphabets;
alphabets.join('');
alphabets.join(' ');
alphabets.join(' ').split(' ');



// Write a function that will take firstname and lastname and return fullname;
function fullname() {
  return 'Antoinette Amedza'
}
fullname();




// Write a function that will take firstname and lastname and return fullname;
function fullName(firstName, Lastname) {
  return `${firstName} ${Lastname}`;
}
fullName('Antoinette', 'Amedza');




// Write a function that will take a user with firstname and lastname and return fullname;
const user = {
  firstname: 'Antoinette',
  lastname: 'Amedza'
}
function fullname(user) {
  return `${firstname} ${lastname}`;
}
fullname(user);


// Write a function that will take a user with firstname and lastname and return fullname;
const user = {
  firstname: 'Antoinette',
  lastname: 'Amedza'
}
function fullname(user) {
  return {
    ...user,
    fullname: `${user.firstname} ${user.lastname}`
  }
}
fullname(user);



// Array map
const users = [
  { firstname: 'Linda', lastname: 'Parker' },
  { firstname: 'Mark', lastname: 'Twaine' },
  { firstname: 'Oliver', lastname: 'Queen' },
  { firstname: 'Stephen', lastname: 'Grider' },
  { firstname: 'Elon', lastname: 'Musk' },
]
users.map(fullname);



// Map and return square of numbers
function square(number) {
  return number ** 2;
}
const numbers = [0, 1, 2, 3, 4, 5]
numbers.map(square);


// Filter and return even numbers
function even(number) {
  return number % 2 === 0;
}
numbers.filter(even);


// Filter and return odd numbers
function odd(number) {
  return number % 2 === 1;
}
numbers.filter(odd);



// Write a function that takes a user and dateOfBirth and returns true if their birthday is today else false
const user = {
  name: 'Martin King',
  dateOfBirth: '1997-06-12'
}

function isBirthday(user) {
  const today = new Date();
  const birthDate = new Date(user.dateOfBirth);

  // Debugged with console.log to check for the error
  // console.log(birthDate.getMonth(), today.getMonth());
  // console.log(birthDate.getDate(), today.getDate());

  if (today.getMonth() === birthDate.getMonth() && today.getDate() === birthDate.getDate()) {
    return true;
  } else {
    return false;
  }
}

isBirthday(user);


// Write a function that takes a user and dateOfBirth and returns a Happy Birthday message if their birthday is today else return not your day.

function birthdayGreeting() {
  if (isBirthday(user)) {
    return `Happy birthday, ${user.name}`;
  } else {
    return 'not your day';
  }
}
birthdayGreeting();

// Bottle class
class Bottle {
  constructor(color, shape, volume) {
    this.color = color;
    this.shape = shape;
    this.volume = volume;
  }
  
  getInfo(){
    return `This is a ${this.color} ${this.shape} bottle with a capacity of ${this.volume}ml`
  }
}

const bottle1 = new Bottle('black', 'circle', 300);
bottle1.getInfo();
const bottle2 = new Bottle('yellow', 'square', 100);
bottle2.getInfo();







  




