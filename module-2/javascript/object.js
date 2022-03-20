// // empty object
// let obj = {};
// console.log(obj);

// let objAyush={Name : 'Ayush Gupta',phoneNo : 9999072980 ,DateOfBirth : '18-09-1998', Age : 23 };
// console.log(objAyush);

let capAmerica={
    Name : "strve",
    Age : 9999 ,
    Friend : ["Natasha ","bruce","Thor","Tony","bucky"],
    Address : {
        state : "America",
        city : "Queen"
    },
    sayHi: function (){
        console.log("cap America says Hiii");
    },
    isAvenger: false

   
 }
// // name of cap America
console.log(capAmerica.Name);

// //Age 
// console.log(capAmerica.Age);

// //friends
console.log(capAmerica.Friend);
// console.log(capAmerica.Friend[1]);

// //adress
// console.log(capAmerica.Address);
// console.log(capAmerica.Address.state);

// //sayhI()
// capAmerica.sayHi();

console.log("object before update :" , capAmerica);
// add a new key to object
capAmerica.Movies=["Avengers","civilWar","EndcGame"];
console.log("object After update :" , capAmerica);
//delete a key 
delete capAmerica.Movies;

capAmerica.isAvenger =true;

capAmerica.Address.state="NewYork"
console.log(capAmerica);
//second method to access a key
let key = 'Name'
console.log(capAmerica.key);
console.log(capAmerica[key]);