// const fruits = ["apple", "orange", "banana", "banana"];
// console.log(fruits);
// fruits.forEach((fruit) => console.log(fruit));

// const numbers = [1, 2, 3, 4, 5];
// let total = 0;
// numbers.forEach((number) => {
//   total += number;
// });

// const doubleNumber = [];
// number.forEach((number) => {
//   doubleNumber.push(number * 2);
// });
// console.log(doubleNumber);

// let name = "ram";
// let msg = "Hello my name is " + name + "I'm learning javascript";

// alert(msg);

// console.log(msg);

// let result = number1 + number2;
// console.log(result);

// let mc = "prasath";

// console.log(mc);

// let number3 = 95;
// let number4 = 95;

// console.log(number3 + number4);
// console.log(result);

// let number5 = 200;
// let number6 = 200;

// console.log(number5 + number6);
// console.log(result);

const name = "ram ";
const dob = "4-11-2002 ";

let msg =
  "Hello my name is " + name + "& i born on " + dob + "I'm learning javascript";

console.log(msg);
// object
let person = {
  name: "ramprasath",
  age: 20,
  isAlive: true,
  gender: "male",
  address: "Bangalore,karnataka,India",
  sibling: {
    brother: "Ramprasath",
    sister: "sumi",
  },
}; // object

// person.age = 23;

// Dot Notion
// console.log(person.age);
// console.log(person.sibling);

// // Bracket Notion
// console.log(person["key"]);

// // Arrays //
// let favColor = ["red", "blue", "black"]; // Empty array
// // {} -Object
// // [] = Array "this  is Empty"
// // 0,1,2,3 to start //
// favColor[3] = "yellow";

// favColor[5] = null;

// console.log(favColor);
// console.log(favColor.length);

// // function //

// function greetUser(firstName, lastName) {
//   // set of statements
//   // let name = "Ramprasath";
//   let msg = "Hello" + firstName + " " + lastName + "learning Js!";
//   console.log(msg);
// }

// greetUser(" I'm ram ", "prasath ");
// greetUser(" I'm  anbu ", "selvan ");

// // Assignment operator //
// // + //
// let number5 = 90;
// let number6 = 58;

// console.log(number5 + number6);

// // * //
// let number7 = 90;
// let number8 = 58;

// console.log(number5 * number6);

// // ==
// let number9 = 90;
// let number10 = 58;

// console.log(number5 / number6);

// // Arithmethic ///
// let number1 = 20;
// let number2 = 55;

// console.log(number1 + number2);
// console.log(number1 * number2);
// console.log(number1 - number2);
// console.log(number1 / number2);
// console.log(number1 % number2);
// console.log(number1 ** number2);

// // typeof "John"                 // Returns "string"
// // typeof 3.14                   // Returns "number"
// // typeof NaN                    // Returns "number"
// // typeof false                  // Returns "boolean"
// // typeof [1,2,3,4]              // Returns "object"
// // typeof {name:'John', age:34}  // Returns "object"
// // typeof new Date()             // Returns "object"
// // typeof function () {}         // Returns "function"
// // typeof myCar                  // Returns "undefined" *
// // typeof null                   // Returns "object"

// //Increment the number of

// console.log(++number1);
// console.log(++number2);

// //Decrement the number of

// console.log(--number1);
// console.log(number2);

// // fetch and sending //

// //===================Creating a resource============= //
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "content-type": "application/json; charset=UTF-8",
  },
});

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
//////////////////////////////////////////////////////////////

 const formEl  // document.Forms . feedback;//
const btnEL = document.querySelector("submit");

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEL);

  const // jsonData   json.stringify(object.fromEntries (formData)

  // console.log("JSON BODY", jsonData);

  // formEl.addEventListener("submit", handleSubmit);

  // data sending and fetching //

  // send to backend //
  // 1.XMLHttpRequest //

  let xhr = new XMLHttpRequest();
  // XML request //
  xhr.open("GET", "https://reqres.in/api/users?page=2", true);
  xhr.onload = function () {
    document.getElementById("response").innerText = xhr.responseText;
  };
  xhr.send();

  // 2.fetch //
};
formEl.addEventListener("submit", handleSubmit);