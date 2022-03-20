// function in JS without parameter and return
function sayHello()
{
    console.log("Helloo");
}
sayHello();

//function in Js with parameter
function add(num1,num2)
{
   let addition= num1+num2;
   console.log("Addition of numbers is:"+ (num1+num2));
}
add(9,4);

// function with return and parameter
function multiply(num1,num2)
{
    return num1*num2;
}
console.log(multiply(2,3));

// function is in Js are first class citizen
let a=function (num1,num2){
    return num1-num2;
}
console.log(a(40,20));

// iffe