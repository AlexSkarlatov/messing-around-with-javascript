

// console.log('Hesjklkjsddfgsdlkjllo world!');console.log('Hello world!');console.log('Hello world!');

//
// var fn = 'Alex';
// console.log(fn);
//
//
// var fullAge = true;
// console.log(fullAge);
//
// var job;//undefined
// console.log(job);
//
// var job = 'teacher';
// console.log(job);
//
//
// // var _3 = 'x';
// var jonMark;
// /*what is variable mutation and type cooercion*/
// //there be 5 types of primitve variables in this Language
/*
1. string
number decimal
??? boolean
null
// undefined
// */
//
//
//
//
// var fn = 'jon';
// var age = 28;
//
// console.log(fn + ' ' + age);
//
// //type cooercion is just autoboxing
// /* type cooercion belo */
// var job, isAlive;
// job = 'teacher';
// isAlive = false;
//
//
// console.log(fn + ' is a  ' + age + 'year ole' + 'is alive: ' + isAlive);
//
// // what is variable mutation
// age = 'twenty eight';
//
//
// alert('hellow' + fn);
// var ln = prompt('what is last name?');
// console.log (fn + ' ' + ln);
//
//
/*
  basic operators
**/
//cy = current year
var cy = 2020;
var dobMark = cy -33;
var dob = cy -27;
console.log(dob);

var ageJ, ageM;
ageJ= 10;
ageM= 11;
var oldest = ageJ > ageM
console.log(oldest);

//use typeof operators
console.log(typeof ageJ);


var now,yearJohn,adultAge;
now = 2020;
yearJohn = 1950;
var isAdultAge = now - yearJohn >= adultAge;


var average = (ageJ + adultAge) / 2
console.log(average);


var x , y ;
x = (3+5) * 4 - 6;
console.log(x);
x = y =  (3+5) * 4 - 6;
console.log(x,y);
//////



//basic operators
x *= 2;
console.log(x);
x++;
console.log(x);


/* truthy and falsy values
values that eval to true or false */



// type coercion is data types of voth values dont have to match
var height = 1;
if (   height === 0){
  console.log('lll');
}
else {
  console.log('ooo');
}


function calculateAge(by){
  console.log("the total years is: " + (2018-by));
  return 2018 - by;
}

var x = calculateAge(1990);
console.log(x);
var ageJoe = calculateAge(1999);
var ageJohn = calculateAge(1991);
var ageJane = calculateAge(1994);
console.log(ageJoe, ageJohn, ageJane);


function yrsUntilRetirement(year, firstName){
  var age = calculateAge(year);
  var retirement = 65-age;
  if(retirement > 0 ) {


  console.log(firstName + " retires in " + retirement + "years");
  }
  else {
    console.log(firstName + " is already retiremented")
  }
}

yrsUntilRetirement(1990, 'john');

yrsUntilRetirement(1888, 'joe');
yrsUntilRetirement(1978, 'jane');


/* function statments are apprenately just written defiereintly
*/
// funcgtion statements
// assigneing function  to varialble
var whatDo = function(job, firstName){
  switch(job) {
    case 'teacher':
      return firstName + 'teaches students code';
    case 'driver':
      return firstName + " drives car in lisbon";
    case 'designer':
      return firstName + " designes stuff";
    default:
      return firstName + 'does something i dunno am not a dictionary';
  }
}

console.log(whatDo('teacher','johnny'));
console.log(whatDo('designer','johnny'));
console.log(whatDo('retired','johnny'));
//expression is code that always produces a values
// afunction is code that does something or calls other functions or is recursive



/* basics of js arrays */
var names = ['j','j','j','j','j','j','j'];
var years = new Array(1999, 1969, 6969);
console.log(names);




consol.log(names.length);

//index assignment
names[1]='ben';
names[names.length]='new guy';

var john = ['joghn', 'smith', 28, 'teacher', false];
names[names.length]=john;
