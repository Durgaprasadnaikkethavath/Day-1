console.log("Data Types");

// values and variables

let firstName = "durga";
console.log(firstName);

// Data Types are three type 1.primitive data type
//                           2.non-primitive datatype
//                           3.dynamic data type

// 1.primitive data type

// string, number, bigInt, boolean, undefined, null, symbol

// string -> represent textual data

let str = "javascript";
console.log(str);

// number -> represent numeric value, integers and floating points

let n = 12;
console.log(n);

// bigInt -> appending n the number

let num = 123456789214n;
console.log(num);

// Boolean -> true or false

let age = true;
console.log(age);

// undefined -> empty value

let char;
console.log(char);

// symbol -> unique value

let sum = Symbol("unique");
console.log(sum);

///////////////////////////////////////////////////////////////////////
// 2.non-primitive datatype

// object, arrays, date, function, built-in objects

// object -> collection of key pairs

const obj1 = {
  name: "durga",
  ages: 23,
};

console.log(obj1);

// arrays -> ordered list of values

const arr1 = [1, 2, 32, 444];
console.log(arr1);

// function -> block code designed to performed a specific task.

function fullName() {
  console.log("durga prasad naik");
}

console.log(fullName);

// date

const today = new Date();
console.log(today);

// built-in

// const array = new Map();
// Map.set("key", "values");
// console.log(array);

// //////////////////////////////////////////////
// 3.dynamic data type -> js is a dynamic data type for variable can changes types to runtime

const value = 10;
value = "name";
value = true;
