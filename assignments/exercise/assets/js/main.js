var name = 'Hunter';
var favNumber = 8;
var favNumberString ='8';
var boolean = true;
var myNameArray = ['h','u','n','t','e','r'];
var multipleArray = ['m', 'a', 'r', 'r', 's', 8, false];
var lastName = 'Marrs';
var fullName = 'Hunter' + 'Marrs';
var twoNumbers = 40 + 60;
var longWord = 'supercalifragilisticexpialidocious';
var students = [
  'Vee',
  'Sophia',
  'Malini',
  'Ethan',
  'Nicole',
  'Ani',
  'Sarah',
  'Ivy',
  'Hunter',
  'Emily',
  'Daniela',
  'Carly',
  'Sophie',
  'Allison',
  'Germaine'
];
var date = new Date();
var hours = date.getHours();
var studentsToday = 14;
var restaurantArray = ['Kenka', 'Ippudo', '99c pizza'];
var animalsArray = ['cat', 'sugar glider', 'dog'];
var pokemonArray = ['Mew', 'Squirtle', 'Eevee'];
console.log('my name is', name );
console.log('my favorite number as a number is', favNumber);
console.log('my favorite number as a string is', favNumberString);
console.log(boolean);
console.log('my name as an array is', myNameArray);
console.log('my last name with a number and a boolean is', multipleArray);
console.log('my first and last name together is', fullName);
console.log(twoNumbers);
console.log(myNameArray [0]);
console.log(myNameArray [myNameArray.length - 1]);
console.log(longWord.length);
console.log(name.length = lastName.length);
if (studentsToday == students.length) {
    console.log('all students are in class');
} else {
  console.log('students are missing');
}
for ( var i = 0; i < fullName.length; i++ ) {
  console.log( fullName[i] + 'letter number' + i );
}
if ( hours > 19 && hours < 21 ) {
  console.log("it is between 7 and 9:40");
}
else {
  console.log("it is not between 7 and 9:40");
}

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday [date.getDay()];

if ( n == "Monday") {
  console.log("first day of week" );
}
else if ( n=="Tuesday") {
  console.log("studio class!");
}
else if (n=="Wednesday") {
  console.log("third day - no class");
}
else if ( n=="Thursday") {
  console.log("fourth day - studio class");
}
else if ( n=="Friday") {
  console.log("fifth day - lab class!");
}else if ( n=="Saturday") {
  console.log("drinking time");
}else if ( n=="Sunday") {
  console.log("prepare to do it all again");
}

console.log(restaurantArray);
console.log(animalsArray);
console.log(pokemonArray);
