

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


//
// /* basics of js arrays */
// var names = ['j','j','j','j','j','j','j'];
// var years = new Array(1999, 1969, 6969);
// console.log(names);
//
//
//
//
// console.log(names.length);
//
// //index assignment
// names[1]='ben';
// names[names.length]='new guy';
//
// var john = ['joghn', 'smith', 28, 'teacher', false];
// names[names.length]=john;
// john.push([1,2,3,4,5]);
// john.unshift(1);//// adds an element to beginning
// john.pop(); //removes an element from the end
// john.shift(); //removes the element in the first index  of the array
// john.indexOf('smith');//returns index value of given elt
// // console.log(john[5][3]);
// console.log(john);
//
// //ternary operator syntax
// var isteacher = john.indexOf('teacher') === -1 ? 'is nooooooot a teacher' : 'john is  a teacher';
// console.log(isteacher);
//
//
// //the coding challenge in my tutorial doesn t require i pass an array to do but im a masochist and was curious if the javascript language has this capability,
// // turns out it has some quirks i neeed to work around i think i should simplify my solution and just move on
// // how do i tokenize in this language ?
// //restaraunts variables
// var inputArr = [['arby',124],['mcdonalds',48.00],['pizzeria',265.00]];
// console.log(inputArr);
// // tip calculator
// var tipFunctionVar = function tip(billArray){
//     console.log('jjjjjjjjjjjjjjj     ' + billArray);
//     var inArr = new Array(billArray);
//     //console.log( TypeOf inArr);
// //input parameter is just one long string for some reason , cannot pass an array as variable for some reason]]
// // i just looked it up and theres a special spread syntax for passing arrays to a function, why this gotta be so long unlike java java script makes me jump through all these exra hooops >:|
//   var tipAmountArr,tipAmount, billPlusTipArr;
//   tipAmountArr = new Array();
//   billPlusTipArr = new Array();
//   //iterate over the arrays
//
//   for( let i = 0; i < billArray.length; i++){
//     if(billArray[i][1] < 50.00)
//     {
//       tipAmount = billArray[i][1] * 0.2;
//       var calcBillPTip = tipAmount + billArray[i][1];
//       billPlusTipArr.push(calcBillPTip);
//       tipAmountArr.push(tipAmount);
//       //do tip 20 percent
//       console.log( billArray[i][0] + 'will be tipped 20 percent the total of the tip is' + tipAmount);
//     }
//     else if(billArray[i][1] >= 50 && billArray[i][1] <= 200){
//         //tip 15 percent
//         tipAmount = billArray[i][1] * 0.15;
//         var calcBillPTip = tipAmount + billArray[i][1];
//         billPlusTipArr.push(calcBillPTip);
//         tipAmountArr.push(tipAmount);
//         //do tip 20 percent
//         console.log( billArray[i][0] + 'will be tipped 20 percent the total of the tip is' + tipAmount);
//     }
//     else{
//         //tip is 10 pecent
// //         tipAmount = billArray[i][1] * 0.1;
//         var calcBillPTip = tipAmount + billArray[i][1];
//         billPlusTipArr.push('the bill total of restaraunts'+ billArray[i][0] +' is'+ calcBillPTip + 'at a tip rate of' + tipAmount);
//         tipAmountArr.push(tipAmount);
//         //do tip 20 percent
//         console.log( billArray[i][0] + 'will be tipped 20 percent the total of the tip is' + tipAmount);
//     }
//     var returnValue = new Array();
//     returnValue.push(billPlusTipArr);
//     returnValue.push(tipAmountArr);
//     return returnValue;
//   }
// }
// // tipFunctionVar();
// console.log(tipFunctionVar(inputArr));
//
// var p1 =['x','y','z'];
// function callme(p1){
//   console.log(p1[0][1]);
// }
//
// callme(p1);//no problems passing ihis array
// callme(inputArr);//this ones is fine too
//
//
// var input = [111,222,333];
//
// /*
// this is a function to solve that coding challenge in the tutorial it is less ambitious and
// and instead of taking and working with a 2d array it jusst takes a 1d array and returns two arrays
// // that represent tghe tip amount after doing a few calculations depedning on a selection statements444
// //
// // this wasn't particularly difficult at all i was just curious what kind of solutions and approaches might be taken
// // with this without the use of an object as a parameter it was quite the hassle to debug my 2d array and i feel like it can
// // still be done but its jsut inefficient and ive already seen enough debugging for now for there
// // sake of brevity I willmove on to more interesting concepts and try to remember to come back to this one
// //     */
// // function tipCalculator(bill)
// // {
// //   var tipAmountArr,tipAmount, billPlusTipArr;
//   tipAmountArr = new Array();
//   billPlusTipArr = new Array();
//   for( let i = 0; i < bill.length; i++){
//     if(bill[i] < 50.00)
//     {
//       tipAmount = bill[i] * 0.2;
//       var calcBillPTip = tipAmount + bill[i];
//       billPlusTipArr.push(calcBillPTip);
//       tipAmountArr.push(tipAmount);
//       //do tip 20 percent
//       console.log( bill[i] + 'will be tipped 20 percent the total of the tip is' + tipAmount);
//     }
//     else if(bill[i] >= 50 && bill[i] <= 200){
//         //tip 15 percent
//         tipAmount = bill[i] * 0.15;
//         var calcBillPTip = tipAmount + bill[i];
//         billPlusTipArr.push(calcBillPTip);
//         tipAmountArr.push(tipAmount);
//         //do tip 20 percent
//         console.log( billArray[i][0] + 'will be tipped 20 percent the total of the tip is' + tipAmount);
//     }
//     else{
//         //tip is 10 pecent
//         tipAmount = bill[i] * 0.1;
//         var calcBillPTip = tipAmount + bill[i];
//         billPlusTipArr.push('the bill total of restaraunts'+ bill[i] +' is'+ calcBillPTip + 'at a tip rate of' + tipAmount);
//         tipAmountArr.push(tipAmount);
//         //do tip 20 percent
//         console.log( bill[i] + 'will be tipped 20 percent the total of the tip is' + tipAmount);
//     }
//     var returnValue = new Array();
//     returnValue.push(billPlusTipArr);
//     returnValue.push(tipAmountArr);
//     return returnValue;
//   }
// }
// //
// // /* for the coding tutorial professors solution it was simpler but too diided up for me, the function only returned a single value which was the value of the tipped
// // and there were two arrays that made use of the function by ad */
// //
// // //nevermind passing arrays is not exactly a difficult affair so the question of why my array suddenly becomes a string is difficult o answer unless i can actively debug the functions//
//
// //it was midnight when i wrote the tip calculator function and I wrote it out wholesale hoping that it would go off without a hitch through it is a simple logical puzzle I currently
// //do not have the learning to debug line by line and would have been better off taking the meticulous approach of writing each line of code piece by piece and testing
//
//
//
//
//
// /*objects and properties */
//
//
//
//
// //object literal
// var john = {
//   fn: 'jimothy',
//   ln: 'raynor',
//   birthYear: 1995,
//   family: ['jane','jane','jane','jane'],
//   job: 'teacher',
//   calcthing: function(param){
//     this.job = param;
//     return 2020 - this.birthYear;
//
//   },
//   saySomething: function(quote){
//     return 'user says' + quote;
//   }
// };
//
//
// var by = 'birthYear';
//
// console.log(john[by]);
// console.log('calculating john' + john.calcthing());
//
// console.log(john.fn);
// john.job = 'designer';
//
// var nova = new Object();
// nova.firstName = 'nova';
// nova.birthYear = 40321;
// nova['lastName']  = 'terra';
// console.log(nova);
// console.log(john.saySomething('hi'));
//
// var mark = {
//   fn: 'mark',
//   mass: 150,
//   height: 60,
//   bmi: 0,
//   calculateBMI: function(){
//     this.bmi = this.mass/this.height ** 2;
//     return this.bmi;
//   }
//
// };
//
// var johnny = {
//   fn: 'johnny',
//   mass: 200,
//   height: 77,
//   bmi: 0,
//   calculateBMI: function(){
//     this.bmi = this.mass/this.height ** 2;
//     return this.bmi;
//   }
//
// };
// console.log(mark.fn + ' bmi = ' + mark.calculateBMI());
// console.log(johnny.fn + ' bmi = ' + johnny.calculateBMI());
// if(mark.calculateBMI() > johnny.calculateBMI()){
//   console.log( 'mark is having larger bmi');
//
// } else if (mark.calculateBMI() < johnny.calculateBMI()) {
//     console.log( 'johnny is having larger bmi');
// } else {
//     console.log( 'both have same bmi');
// }
// //
//  var j = ['a','b',2,3,4,true];
// for ( var i = 0; i < j.length; i++){
//   if (typeof john[i] !== string ){
//     continue;
//   }
//   console.log(j[i]);
// }
//
// for ( var i = 0; i < j.length; i++){
//   if (typeof john[i] !== string ){
//     break;
//   }
//   console.log(j[i]);
// }
// //looping backwards
// for ( var i = j.length -1; i >=0; i--)
// {
//   console.log(j[i]);
// }
// var i = 0;
// while( i < john.length)
// {
//   console.log(john[]);
//   i++;
// }
/* challenge

  create an object that has an array of bill values

 */
var billArray = [1,2,3,4,5];

var johnClass = {
  //fields
  bills: [124,48,268,180,42],
  allTipsArr: new Array(),
  finalTenderArr: [],
  //methods
  tipCalculator: function(){


    var tip = 0;
    for(var i = 0; i < this.bills.length; i++){
      if(this.bills[i] < 50){
        //do 20 percent
        tip = this.bills[i] * 0.15;
        this.allTipsArr.push(tip);
        this.finalTenderArr.push(tip + this.bills[i]);
        // console.log(this.bills[i]);
      } else if(this.bills[i] >= 50 && this.bills[i] <= 200 ) {
        //do 15
        //console.log(this.bills[i]);
        //calculate the tip, then add it to the alltips arr
          tip = this.bills[i] * 0.15;
          this.allTipsArr.push(tip);
          this.finalTenderArr.push(tip + this.bills[i]);

      }
      else{
        //do 10
        // console.log(this.bills[i]);
        tip = this.bills[i] * 0.15;
        this.allTipsArr.push(tip);
        this.finalTenderArr.push(tip + this.bills[i]);
      }
    }

    console.log(this.allTipsArr);
    console.log(this.finalTenderArr);
  }
};
johnClass.tipCalculator();




function avgTipCalculator(arr){
// error handling look before you leap there is a throw if not type of array
  var myArr = arr;
  console.log(arr);
  var sum = 0;
  for ( var i = 0; i < arr.length ;  i++){
      sum += arr[i]
  }
  var avg = sum / arr.length;
  return avg;
}

// console.log(avgTipCalculator(johnClass.tip));
var y = avgTipCalculator(johnClass.allTipsArr);
// var z = avgTipCalculator(mark)
console.log(y);
