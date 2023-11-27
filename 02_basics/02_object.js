//sligleton
// const mySym = Symbol("key1");
// const jsUser = {
//     name: "Arsalan",
//     age: 20,
//     email: "arsalandanish0903@gmail.com",
//     loggedIn: false,
//     lastLogginDays: ["monday", "saturday"],
//     [mySym]: "myKey1"
// }

// console.log(jsUser.name);


// Object.freeze(jsUser); // lock krdeta hai 
// jsUser.email = "danish@gmail.com";
// console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("Hello Js User");
// }
// jsUser.greeting = function(){
//     console.log(`Hello Js  User ${this.name}`);
// }
// console.log(jsUser.greeting());


const details = {
    emial: "danish@google.com",
    fullName:{
        userName:{
            fisrtName: "Arsalan",
            lastName: "Danish"
        }
    }
}
// console.log(details.fullName.userName.fisrtName);

const firstObj = {
    1: "a",
    2: "b",
}
const secondObj = {
    3: "c",
    4: "d"
}
//  const thirdObj = {firstObj,secondObj};
//  const thirdObj = Object.assign({},firstObj, secondObj);
// const thirdObj = {...firstObj, ...secondObj}
//  console.log(thirdObj);

const user = [
    {
        id: "123abc",
        email: "A@gmail.com"
    },
    {
        id: "123abc",
        email: "A@gmail.com"
    },
    {
        id: "123abc",
        email: "A@gmail.com"
    },
]
user[1].email;
// console.log(details);

// console.log(Object.keys(details));
// console.log(Object.values(details));
// console.log(Object.entries(details));

console.log(details.hasOwnProperty("email"));