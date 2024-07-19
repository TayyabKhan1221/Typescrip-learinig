// let myName: string;

// myName = "tayyab"
// console.log(myName);

// let a = Number(prompt("value 1"));
// let b = Number(prompt("value 2"));

// let result = a + b;
// console.log(result);

// let userName = prompt("what is your name");

// if (userName === null) {
//   userName = "tayyab";
// }
// console.log(userName?.toUpperCase());

let arr = [8, "5", 5, 1];
console.log(arr);

arr.push("sss");

if (false) {
  let z = 4;
  //use z
  console.log(z.toFixed());
} else {
  let z = "string";
  //use z
  console.log(z.toUpperCase());
}

const myObj = {
  name: "tayyab",
  age: 25,
  hobbies: [3, 5, 1],
  test: true,
};
console.log(myObj.hobbies[2].toFixed(5));
// narrowing
let myAge: string | number | boolean;
myAge = "shehzad";
console.log(myAge.toUpperCase());
myAge = 56;
console.log(myAge.toFixed());
myAge = false;

