// document.querySelector(".heading").textContent = "*★,°*:.☆( ' ▽ ' )/$:*.°★* 。";

// document.querySelector("#heading1").textContent = "ヽ(✿ﾟ▽ﾟ)ノ";

// console.log("（＾∀＾●）ﾉｼ")




// literals :   You can not change its value.

// 23
// 67
// 48.4
// 'ye'


//variables :   You can change its value anytime.

// let age = 57;
// console.log(age);


//naming conventions to name a  variables

// 1. Uppercase / Lowercase don't matter.
// let LAURANGUYEN = 25;
// console.log(LAURANGUYEN);

// let lauranguyen = 50;
// console.log(lauranguyen);


// 2. you are not allowed to add numbers on the Start.

// let 1pthan = 12;
// console.log(1pthan);

// const age = 17;
// console.log(age);

// age = 45;
// console.log(age);

// let wawa = 1000000000000000000;
// console.log(wawa);




// we dont use data types to declare a variable in javascript like c++

// let age = 40.90;
// console.log(typeof age);

// let age;
// console.log(typeof age);

// let age = null;
// console.log(typeof age);






// assignment operator

// let = "age";
// age = 2 + 4;
// console.log(age);

// let = "age";
// age += 5;
// console.log(age);




// console.log(5**5);
// console.log(4+8);
// console.log(2-4);
// console.log(2*3);
// console.log(2/3);
// console.log(2%3);
// console.log(a++);
// console.log(a--);

// you can declare multiple variables in one single line.
// let a = 4, b = 3, c = 2;
// console.log(a, b, c)


//using var, you can redeclare a variable in javascript and it will update the value of the variable.
//using let, you CANNOT redeclare a variable in javascript.


//using var, this does work.
//var k = 4;
//var k = 5;
//console.log(k);


//using let, this does not work.
//let k = 4;
//let k = 5;
//console.log(k);


//exponentiation in JavaScript -> **
// exponentiation in math -> ^


//conditional statements in javascripts
// age = 12;
// if(age > 18){
//     console.log("You can vote :D");
// }
// else if(age < 18){
//     console.log("You CANNOT vote");
// }
// else{
//     console.log{"Verify your age."};
// }


// if(2 == 2){
//     console.log("equal");
// }
// else if(2 == 4){
//     console.log("not equal");
// }
// else{
//     console.log{"unknown"};
// }


// if(2 == 3){
//     console.log("equal");
// }
// if(2 == 4){
//     console.log("not equal");
// }
// if(2 == 5){
//     console.log("dont know");
// }
// if(false == true){
//     console.log("not possible");
// }
// if(true){
//     console.log("true");
// }
// else if(5 != 3){
//     console.log("not equal 5 and 3");
// }
// else if(4 != 4){
//     console.log("not equal 4 and 4");
// }
// else{
//     console.log("Default value!!");
// }


// w = 12;
// e = 3;
// b = 11;
// if(w == 2 && w < 3){
//     console.log(w);
// }
// if (w != 5){
//     console.log("whatever");
// }
// if(w != 5 && e >= 5){
//     console.log("Its going to happen");
// }
// if(b != 0 || w == 2){
//     console.log("you say");
// }
// if(!e < 10){
//     console.log(e);
// }

// else if(w < 10 || w > 5) {
//     console.log("okkkkkk");
// }
// else if(e < 10 || e <= 0){
//     console.log("pikachu");
// }
// else if(b == 0 && e == 5){
//     console.log("pikaboo");
// }
// else(
//     console.log("default value")
// )

// x = 12;
// y = 3;
// z = 11;
// if(x == 2 && x < 3){
//     console.log(x);
// }
// if(x != 5){
//     console.log("whatever");
// }
// if(x != 5 && y >= 5){
//     console.log("its gonna happen");
// }
// if(z != 0 || x == 2){
//     console.log("you say");
// }
// if(!(y < 10)){
//     console.log(y);
// }
// else if(x < 10 || x < 5){
//     console.log("okkkkkkk");
// }
// else if(y < 10 || y <= 0){
//     console.log("pikachu");
// }
// else if(z == 0 && y ==5){
//     console.log("Pikaboo");
// }
// else{
//     console.log("Default value");
// }


// x = 2;
// y = 30;
// z = 12;
// if(x >= 4 && x <= 2){
//     console.log(x);
// }
// if(x != -15){
//     console.log("whatever");
// }
// if(x == 5 && y <= 4){
//     console.log("its gonna happen");
// }
// if(z > x && x < y || x == 2){
//     console.log("you say");
// }
// if(! (y < 3)){
//     console.log(y);
// }
// else if(y < 10 || z < 5){
//     console.log("okkkkkkk");
// }
// else if(z > 10 || y <= 100){
//     console.log("pikachu");
// }
// else if(z == 0 && y == 5){
//     console.log("Pikaboo");
// }
// else{
//     console.log("Default value");
// }

// DOM Manipulation
// how to change the css styles using javascript :



// document.querySelector(".heading").style.color = "rgba(37, 29, 59, 0.8)"
// document.querySelector(".heading").style.fontSize = "100px"
// document.querySelector(".heading1").style.color = "rgba(37, 29, 59, 0.8)"
// document.querySelector(".heading1").style.fontSize = "100px"

document.querySelector(".body").style.backgroundColor = "rgba(174, 214, 225, 0.8)"
document.querySelector(".heading").style.textAlign = "center"
document.querySelector("#heading1").style.textAlign = "center"

const kirby = document.querySelectorAll(".kirby")
for (let i = 0; i < kirby.length; i++) {
    kirby[i].style.display = "inline-block";
  }
















