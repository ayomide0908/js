// // // // // // // // // // // This is a single line of code

// // // // // // // // // // console.log(100);

// // // // // // // // // // console.log("Hello World");

// // // // // // // // // // console.log(20, "Hello", true);

// // // // // // // // // // const x = 100;

// // // // // // // // // // console.log(x);

// // // // // // // // // // console.error("Alert");

// // // // // // // // // // console.warn("Warning");

// // // // // // // // // // console.table({ name: "Brad", email: "brad@gmail.com" });

// // // // // // // // // // console.group("simple");
// // // // // // // // // // console.log(x);
// // // // // // // // // // console.error("Alert");
// // // // // // // // // // console.warn("Warning");
// // // // // // // // // // console.groupEnd();

// // // // // // // // // // const styles = "padding:10px; background-color:white; color:green";
// // // // // // // // // // console.log("%cHello World", styles);

// // // // // // // // // // declaration of variables
// // // // // // // // // // var, let , const

// // // // // // // // // // let firstName = "John";
// // // // // // // // // // let lastName = "Doe";

// // // // // // // // // // console.log(firstName, lastName);

// // // // // // // // // // let age = 30;

// // // // // // // // // // console.log(age);

// // // // // // // // // // // reASSIGN
// // // // // // // // // // age = 31;

// // // // // // // // // // console.log(age);

// // // // // // // // // // let score;

// // // // // // // // // // score = 1;

// // // // // // // // // // console.log(score);

// // // // // // // // // // if (true) {
// // // // // // // // // //   score = score + 1;
// // // // // // // // // // }

// // // // // // // // // // console.log(score);

// // // // // // // // // // const x = 100;

// // // // // // // // // // const arr = [1, 2, 3, 4];
// // // // // // // // // // console.log(arr);

// // // // // // // // // // arr.push(5);
// // // // // // // // // // console.log(arr);

// // // // // // // // // // const person = {
// // // // // // // // // //   name: "Brad",
// // // // // // // // // // };

// // // // // // // // // // // reassigning
// // // // // // // // // // person.name = "john";

// // // // // // // // // // person.email = "brad@gmail.com";

// // // // // // // // // // console.log(person);

// // // // // // // // // // // declare multiple values
// // // // // // // // // // let a, b, c;

// // // // // // // // // // const d = 10,
// // // // // // // // // //   e = 2,
// // // // // // // // // //   f = 30;

// // // // // // // // // // console.log(e);
// // // // // // // // // // console.log(f);

// // // // // // // // // // String
// // // // // // // // // const firstName = "sara";

// // // // // // // // // // // number
// // // // // // // // // // const age = 30;
// // // // // // // // // // const temp = 98.9;

// // // // // // // // // // boolean
// // // // // // // // // const hashkids = true;

// // // // // // // // // // null
// // // // // // // // // const aptNumber = null;

// // // // // // // // // // undefined
// // // // // // // // // const score = undefined;

// // // // // // // // // // symobol
// // // // // // // // // const id = Symbol("id");
// // // // // // // // // const output = id;

// // // // // // // // // console.log(output, typeof output);

// // // // // // // // // // values are stored on the stack
// // // // // // // // // const name = "john";

// // // // // // // // // const age = 30;

// // // // // // // // // //reference value are stored on the heap
// // // // // // // // // const person = {
// // // // // // // // //   name: "Brad",
// // // // // // // // //   age: 40,
// // // // // // // // // };

// // // // // // // // // let newName = name;
// // // // // // // // // newName = "Johnathan";

// // // // // // // // // let newPerson = person;
// // // // // // // // // newPerson.name = "Bradely";

// // // // // // // // // console.log(name, newName);
// // // // // // // // // console.log(person, newPerson);

// // // // // // // // // change string to number
// // // // // // // // // let amount = "100";

// // // // // // // // // amount = parseInt(amount);
// // // // // // // // // amount = +amount;
// // // // // // // // // amount = Number(amount);

// // // // // // // // // console.log(amount, typeof amount);

// // // // // // // // // change  number to string
// // // // // // // // // let amount = "99.5";
// // // // // // // // // // amount = amount.toString();
// // // // // // // // // amount =  String(amount);

// // // // // // // // // console.log(amount, typeof amount);

// // // // // // // // // // convert number to boolean
// // // // // // // // //
// // // // // // // // // amount = Boolean(amount);

// // // // // // // // let amount = "hello";
// // // // // // // // amount = parseInt(amount);
// // // // // // // // console.log(amount, typeof amount);

// // // // // // // // let x;
// // // // // // // // x = 5 + Number("5");

// // // // // // // // console.log(x, typeof x);

// // // // // // // let x;

// // // // // // // const name = "john";
// // // // // // // const age = 31;
// // // // // // // x = "Hello, my name is " + name + " and I am " + age + "years old";

// // // // // // // // template literals
// // // // // // // x = `Hello, my name is ${name} and I am ${age} years old`;

// // // // // // // // String Properties and Methods
// // // // // // // const s = new String("Hello World");

// // // // // // // x = typeof s;

// // // // // // // // x = s.length;

// // // // // // // // access value by key
// // // // // // // x = s[2];

// // // // // // // x = s.__proto__;

// // // // // // // x = s.toUpperCase();
// // // // // // // x = s.toLowerCase();

// // // // // // // console.log(s);

// // // // // // const myString = "developer";

// // // // // // let myNewString;

// // // // // // // solution 1
// // // // // // myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// // // // // // // solution 2

// // // // // // myNewString = myString[0].toUpperCase() + myString.substring(1);

// // // // // // // solution 3
// // // // // // myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

// // // // // // console.log(myNewString);

// // // // // let x;

// // // // // const num = new Number(5);

// // // // // x = num.toString();

// // // // // x = num.length;

// // // // // x = num.toString().length;

// // // // // x = num.toFixed(2);

// // // // // x = num.toFixed(2);

// // // // // x = num.toPrecision(3);

// // // // // x = num.toExponential(2);

// // // // // x = num.toLocaleString("en-US");

// // // // // x = num.valueOf();

// // // // // x = Number.MAX_VALUE;
// // // // // x = Number.MIN_VALUE;

// // // // // console.log(x);

// // // // let x;

// // // // x = Math.sqrt(9);

// // // // x = Math.abs(-5);

// // // // // round decimal, round up, round down
// // // // x = Math.round(4.2);

// // // // x = Math.ceil(4.9);

// // // // x = Math.floor(4.9);

// // // // // raise to power
// // // // x = Math.pow(2, 3);
// // // // // min & max
// // // // x = Math.min(4, 5, 3);

// // // // x = Math.max(4, 5, 3);

// // // // // random numbers
// // // // x = Math.random();

// // // // x = Math.random() * 10;

// // // // x = Math.floor(Math.random() * 100 + 1);

// // // // console.log(x);

// // // let x;

// // // x = Math.floor(Math.random() * 100 + 1);

// // // console.log(x);

// // // let y;

// // // y = Math.floor(Math.random() * 50 + 1);

// // // console.log(y);

// // // console.log(x, y);

// // // SumOutput = x + y;

// // // console.log(SumOutput);

// // // differenceOutput = x - y;

// // // console.log(differenceOutput);

// // // prod = x * y;

// // // productOutput = `${x} * ${y} = ${prod}`;

// // // console.log(productOutput);

// // // quotient = x / y;

// // // quotientOutput = `${x} / ${y} = ${quotient}`;

// // // console.log(quotientOutput);

// // // rm = x % y;

// // // rmOutput = `${x} % ${y} = ${rm}`;

// // // console.log(rmOutput);

// // let d;

// // d = new Date();

// // d = d.toString();

// // d = new Date(2021, 0, 10, 12, 30, 0);

// // d = new Date("2021-07-10T12:30:00");
// // d = new Date("07/10/2021 12:30:00");
// // d = new Date("2022-07-10");
// // d = new Date("07-10-2022");

// // // TIME STAMPS
// // d = Date.now();

// // console.log(d);

// let x;

// let d = new Date();

// x = d.toString();

// x = d.getTime();
// x = d.valueOf();

// x = d.getFullYear();

// x = d.getMonth() + 1;

// x = d.getDate();

// x = d.getDay();

// x = d.getHours();

// x = d.getMinutes();

// x = d.getSeconds();

// x = d.getMilliseconds();

// x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// x = Intl.DateTimeFormat("default", { month: "long" }).format(d);

// x = d.toLocaleStriing("default", { month: "short" });

// x = d.toLocaleString("default", {
//   weekday: "long",
// });

// console.log(x);

let x;

// Array Literal
const numbers = [12, 45, 33, 29, 39];

const mixed = [12, "Hello", true, null];

// console.log(numbers);

// Array Constructor
const fruits = new Array("apple", "grape", "orange");

console.log(fruits);

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favourite fruit is an ${fruits[2]}`;

console.log(x);
