// chapter 1
alert("Error! please enter valid password");
alert("welcome to js land......\n happy coding!");
alert("welcome to js land....");
alert("hellow...i can run js through my web browser console");

// chapter 2
alert("jhonne doe");
alert("15 year old");
alert("certified mobile application develpment");
alert("pizza\npizz\npiz\npi\np");
alert("my email adress is example@gmail.com");
alert("i am lear a smart java script");
alert("``----------$$$$%$$$$--------``");
// chapter 3
alert("15 year old");
alert("you have visited this side 15 time");
document.write("birth yearis 1990\ndate type of deccleared variable is number");

// chapter 4
var abc;

alert("3. Display this in your browser \na) A heading stating “Rules for naming JS variables” \nb Variable names can only contain ______, ______,______ and ______.\nFor example $my_1stVariablec Variables must begin with\n a ______, ______ or_____. For example $name, _name or named Variable names are case _________\ne Variable names should not be JS _________")


// chapter 5
// Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.
var a = prompt("enter number");
var b = prompt("enter number");
alert(a+b);
document.write("ADDITION    ",a+b);
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
var a = prompt("enter number");
var b = prompt("enter number");
alert(a-b);
document.write("subtraction   ",a-b);

var a = prompt("enter number");
var b = prompt("enter number");
alert(a*b);
document.write("MULTIPLICATION  ",a*b);

var a = prompt("enter number");
var b = prompt("enter number");
alert(a/b);
document.write("division   ",a/b);

var a = prompt("enter number");
var b = prompt("enter number");
alert(a-b*b-a/b);
document.write("ALL DAMS",a-b*b-a/b);


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
var x = 600;
alert(x*5);



// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// program to generate a multiplication table
var number =prompt('Enter an integer: ');

//creating a multiplication table
for(let i = 1; i <= 10; i++) {
     result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
var result;
var result2;
var n=prompt("enter tempreture ");
var m=prompt("enter temprature")
result=(m-32)*5/9;
result2=(n*9/5)+32;
console.log(result, "C" ,"is", result2,"F");
console.log(result2,"F","is",result,"C");


// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
var re;
var re2;
var p=650;
var l=prompt("enter quantity");
re=p*l;
var o=100;
var k=prompt("enter quantity");
re2=o*k;
var i=100;
console.log("SHOPING CART");
console.log("PRICE OF  ITEM 1 IS",p);
console.log("QUANTITY OF ITEM 1 IS",l);
console.log("PRICE OF ITEM 2 IS ",o);
console.log("QUANTITY OF ITEM 2 IS",k);
console.log("SHIPPING CHARGES",i);
console.log("TOTAL COST OF YOUR ORDER IS",re+re2+100);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
var per;
var u=980;
var y=prompt("enter your number");
per=y/u*100;
console.log("MARK SHEET");
console.log("TOTAL MARKS",u);
console.log("OBTAINED MARKS IS ",y);
console.log("PERCENTAGE:",per);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5/
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

var air=(5*10)/2;
console.log(air);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
var age;
var cu=2022;
var bir=2001;
age =cu-bir;
console.log("current year is",cu);
console.log("birth year is",bir);
console.log("age is",age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
var cir,area;
var r=prompt("enter circle radius");
var pie=3.142;
cir=2 *pie* r;
area=pie*r*r;
console.log("radius of circle is",r);
console.log("circumference of circle is",cir);
console.log("area of circle is",area);

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
var to;
var sna=prompt("favourite snack");
var cura=prompt("enter current age");
var max=prompt("enter maximum age");
var snack=prompt("amount of snack per day");
to=max*snack;
console.log("favourite snack is ",sna);
console.log("current age is",cura);
console.log("maximum age is",max);
console.log("amount of snack per day is",snack);
console.log("you will need",to,"last to until age of",max);

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var ee,rr,tt,uu;
var q=10;
ee=1+q;
rr=q+1;
tt=1-q;
uu=q-1;
console.log("value of q is ",q);
console.log("q++ is",rr);
console.log("++q is",ee);
console.log("--q is",tt);
console.log("q-- is",uu);

// chapter 9---10
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var as="KARACHI";
var aw=prompt("enter city");
var aq="Welcome to city of lights";
aw=aw.toUpperCase("karachi");
if (aw == as){
    alert("Welcome to city of lights")
    console.log("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.


var gen=prompt("enter gender");
var ma="male";
var fe="female";
if(ma == gen){
    alert("good morning sir");
}else if( fe == gen){
    alert("good morning mam");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
var gg=prompt("enter signal color");
var red="red";
var yellow="yellow";
var green="green";
if(gg == red){
    alert("must be stop");
}else if(gg == yellow){
    alert("ready to go");
}else if(gg == green){
    alert("run");
}

// 4. Write a program to take input remaining fuel in car (in
    // litres) from user. If the current fuel is less than 0.25litres,
    // show the message “Please refill the fuel in your car”

    var feul=prompt("enter reamaining fuel");
    var cufuel=0.25;
    if(feul == cufuel){
        alert("Please refill the fuel in your car");
    }

    // 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting/
// percentage on your page. Take percentage & compute
// grade as per following table:
var perc;
var mar=300;
var obt=prompt("enter your marks");
perc=obt/mar*100;
console.log("total marks",mar);
console.log("obtained marks",obt);
console.log("percentage",perc);
if(perc == 80 ){
    console.log("grade [A-one]");
    console.log("remarks: excellent");
}else if(perc == 70){
    console.log("grade [A]");
    console.log("remarks: good");
}else if(perc == 60){
    console.log("grade [B]");
    console.log("remarks: you need improve");
}

// chapter 12-13
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter
var aa=20;
var vv=60;
if (aa > 300 && vv < 6) {
     alert("true");
     }
     else {
     alert("false");
     }
    //  Write a program that takes input a number from user &
    //  state whether the number is positive, negative or zero     
    var ff=10;
    var xx=20;
    if(ff && xx < 1){
        alert("number is positive");
    }else if(ff && xx >1) {
        alert("number is negative");
    }else{
        alert("zero");
    }

    // 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var tim=1900;
if(tim>=0000 && tim<1200){
    alert("good morning");
}else if(tim>=1200 && tim<1700){
    alert("good afternoon");
}else if(tim>=1700 && tim<2100){
    alert("good evening");
}else if(tim>=2100 && tim<2359){
    alert("good night");
}
// chapter 13-15

// Declare an empty array using JS literal notation to store
// student names in future.
av = [1,2,3];

av = [];
console.log(b); // [1,2,3]
av.length = 0;
av.splice(0,a.length);
while(av.length > 0) {
    av.pop();
}

// 3. Declare and initialize a strings array
var hi;
var hh=["mubeen","waseem","naeem"];
hi=hh[2];
console.log(hh[2]);

// Declare and initialize a numbers array



// 5. Declare and initialize a boolean array


// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var percen,zz,we;
var tot=300;
var stu=[mubeen,naeem,faizan]
stu[0]=200;
stu[1]=100;
stu[2]=60;
percen=stu[0]/tot*100;
zz=stu[1]/tot*100;
we=stu[2]/tot*100;
console.log("mubeen marks",stu[0]);
console.log("percentage",percen);
console.log("naeem marks",stu[1]);
console.log("percentage",zz);
console.log("faizan marks",stu[2]);
console.log("percentage",we);

// chapter 17-20
//  Write a program to print numeric counting from 1 to 10.

var mk=10;
for(var i=0 ;i>=10 ;i++){
    console.log(i);
}

// Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user

var number =prompt('Enter an integer: ');

//creating a multiplication table
for(let i = 1; i <= 10; i++) {
     result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}
// 5. Write a program to print items of the following array
// using for loop:

var fruits = ["apple", "banana", "mango", "orange","strawberry"]
for (let i = 0; i < fruits.length; i++) {
    console.log (fruits[i]) ;
  }

//   7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
var  A = ["cake", "apple pie", "cookie", "chips", "patties"]
var B=prompt("enter item");
if(B == A[0] && B == A[1] && B == A[2] && B == A[3] ){
    console.log("item unavaible try another way");
}



// . Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

var array = [3 , 6, 2, 56, 32, 5, 89, 32];
var largest= 0;

for (i=0; i<=largest;i++){
    if (array>largest) {
        var largest=array[i];
    }
}

console.log(largest);

// Write a program to identify the smallest number in the
// given array.
A = [24, 53, 78, 91, 12]
var number;
numbers = [2, 4, 9, 2, 0, 16, 24]

var largest = numbers[0];
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {

  if (numbers[i] > largest) {
    largest = numbers[i];
  } else if (numbers[i] < smallest) {
    smallest = numbers[i];
  }

  console.log(largest);
  console.log(smallest);
}