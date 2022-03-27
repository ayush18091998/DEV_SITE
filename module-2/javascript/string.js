let str= "I am a string "
console.log(str)

//string methods

let len= str.length;
console.log("length of string is:",len)

// slice method-> extract part of a string
let sliceArray=str.slice(2,5);
console.log(sliceArray)

//replace-> replace a part of string with given word
let newStr= str.replace("am","was")
console.log(newStr)

//note-> there is no change in original string

//upper case
let upperCase = str.toUpperCase();
console.log(upperCase);

//lower case
let lowerCase = str.toLowerCase();
console.log(lowerCase);

//concate

let firstName = "AYush";
let lastName = " Gupta";
let fullName=firstName+lastName
console.log(fullName)
// or
// let fullName = firstName.concat(lastName);
// console.log(fullName);

 //split -> return arr or convert str to array
let splitted =  str.split(" ");
console.log(splitted)

