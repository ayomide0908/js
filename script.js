// // // // // // // const post = {
// // // // // // //   id: 1,
// // // // // // //   title: "Post One",
// // // // // // //   body: "This is the body",
// // // // // // // };

// // // // // // // // convert to json string
// // // // // // // const str = JSON.stringify(post);

// // // // // // // // Parse JSON
// // // // // // // const obj = JSON.parse(str);

// // // // // // // // const posts = [
// // // // // // // //   {
// // // // // // // //     id: "1",
// // // // // // // //     title: "Post One",
// // // // // // // //     body: "This is the body",
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     id: "2 ",
// // // // // // // //     title: "Take out Trash",
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // const str2 = JSON.stringify(posts);

// // // // // // // // // console.log(str2);

// // // // // // // // // Object Challenge

// // // // // // // // // step 1
// // // // // // // // const library = [
// // // // // // // //   {
// // // // // // // //     title: "THe Road Ahead",
// // // // // // // //     author: "Bill gates",
// // // // // // // //     status: {
// // // // // // // //       own: true,
// // // // // // // //       reading: false,
// // // // // // // //       read: false,
// // // // // // // //     },
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Steve jobs",
// // // // // // // //     author: "walter Isaacson",
// // // // // // // //     status: {
// // // // // // // //       own: true,
// // // // // // // //       reading: false,
// // // // // // // //       read: false,
// // // // // // // //     },
// // // // // // // //   },
// // // // // // // //   {
// // // // // // // //     title: "Mockingjay",
// // // // // // // //     author: "Suzane collins",
// // // // // // // //     status: {
// // // // // // // //       own: true,
// // // // // // // //       reading: false,
// // // // // // // //       read: false,
// // // // // // // //     },
// // // // // // // //   },
// // // // // // // // ];

// // // // // // // // // step 2
// // // // // // // // library[0].status.read = true;
// // // // // // // // library[1].status.read = true;
// // // // // // // // library[2].status.read = true;

// // // // // // // // console.log(library);

// // // // // // // // // // step 3
// // // // // // // // const { title: firstBook } = library[0];

// // // // // // // // console.log(firstBook);

// // // // // // // // // // step 4
// // // // // // // // const libraryJSON = JSON.stringify(library);

// // // // // // // // console.log(libraryJSON);

// // // // // // // function sayHello() {
// // // // // // //   console.log("hello world");
// // // // // // // }

// // // // // // // sayHello();

// // // // // // // function add(num1, num2) {
// // // // // // //   console.log(num1 + num2);
// // // // // // // }

// // // // // // // add(5, 10);

// // // // // // // function subtract(num1, num2) {
// // // // // // //   return num1 - num2;

// // // // // // //   console.log("After the return");
// // // // // // // }

// // // // // // // const result = subtract(10, 2);

// // // // // // // console.log(result, subtract(20, 5));

// // // // // // function registerUser(user = "tolu") {
// // // // // //   return user + " is registered";
// // // // // // }
// // // // // // console.log(registerUser());

// // // // // // // Rest Params
// // // // // // function sum(...numbers) {
// // // // // //   let total = 0;

// // // // // //   for (const num of numbers) {
// // // // // //     total += num;
// // // // // //   }

// // // // // //   return total;
// // // // // // }

// // // // // // console.log(sum(1, 2, 3, 4, 5, 6, 100, 10));

// // // // // // // objects as params
// // // // // // function loginUser(user) {
// // // // // //   return `The user ${user.name} with the id of ${user.id} is logged in`;
// // // // // // }

// // // // // // const user = {
// // // // // //   id: 1,
// // // // // //   name: "steve",
// // // // // // };

// // // // // // console.log(loginUser(user));
// // // // // // console.log(
// // // // // //   loginUser({
// // // // // //     id: 2,
// // // // // //     name: "saraki",
// // // // // //   })
// // // // // // );

// // // // // // // Arrays as params
// // // // // // function getRandom(...arr) {
// // // // // //   const randomIndex = Math.floor(Math.random() * arr.length);

// // // // // //   const item = arr[randomIndex];

// // // // // //   console.log(item);
// // // // // // }

// // // // // // getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// // // // // // global and function scope
// // // // // // alert("are you sure you want to open this page");
// // // // // // console.log(window.innerWidth);

// // // // // // const x = 100;

// // // // // // console.log(x, "in global");

// // // // // // function run() {
// // // // // //   console.log(window.innerHeight);
// // // // // //   console.log(x, "in function");
// // // // // // }

// // // // // // run();

// // // // // // if (true) {
// // // // // //   console.log(x, "in block");
// // // // // // }

// // // // // // function add() {
// // // // // //   const x = 1;
// // // // // // //   const y = 50;
// // // // // // //   console.log(x + y);
// // // // // // // }

// // // // // // // add();

// // // // // // const x = 100;
// // // // // // const foo = 1;
// // // // // // var bar = 2;

// // // // // // if (true) {
// // // // // //   const y = 200;
// // // // // //   console.log(x + y);
// // // // // // }

// // // // // // // console.log(x + y);

// // // // // // for (var i = 0; i <= 10; i++) {
// // // // // //   console.log(i);
// // // // // // }

// // // // // // console.log(i);

// // // // // // // difference between var vs let & const
// // // // // // if (true) {
// // // // // //   const a = 500;
// // // // // //   let b = 600;
// // // // // //   var c = 700;
// // // // // // }
// // // // // // // var is not block scope , you can consolole log from outside
// // // // // // console.log(c);

// // // // // // // var is function scoped
// // // // // // function run() {
// // // // // //   var d = 100;
// // // // // //   console.log(d);
// // // // // // }

// // // // // // run();

// // // // // // Nested scope
// // // // // // function first() {
// // // // // //   const x = 100;

// // // // // //   function second() {
// // // // // //     const y = 200;
// // // // // //     // console.log(x + y);
// // // // // //   }

// // // // // //   second();
// // // // // // }

// // // // // // first();

// // // // // // // other method
// // // // // // if (true) {
// // // // // //   const x = 100;

// // // // // //   if (x === 100) {
// // // // // //     const y = 200;
// // // // // //     console.log(x + y);
// // // // // //   }
// // // // // // }

// // // // // // // function declaration
// // // // // // function addDollarSign(value) {
// // // // // //   return "$" + value;
// // // // // // }

// // // // // // console.log(addDollarSign(200));

// // // // // // // Function Expression
// // // // // // const addPlusSign = function (value) {
// // // // // //   return "+" + value;
// // // // // // // };

// // // // // // // console.log(addPlusSign(300));

// // // // // // // ARROW Functions
// // // // // // // function add(a, b) {
// // // // // // //     return a + b;
// // // // // // // }

// // // // // // // regular arrow function syntax
// // // // // // const add = (a, b) => {
// // // // // //   return a + b;
// // // // // // };

// // // // // // console.log(add(1, 2));

// // // // // // // or

// // // // // // // implicit return
// // // // // // const subtract = (a, b) => a - b;

// // // // // // console.log(subtract(11, 5));

// // // // // // // can leave () with single params.
// // // // // // const double = (a) => a * 2;

// // // // // // console.log(double(10));

// // // // // // // Returning   an object
// // // // // // const createObj = () => ({
// // // // // //   name: "Brad",
// // // // // // });

// // // // // // console.log(createObj());

// // // // // // // high order array func.
// // // // // // const numbers = [1, 2, 3, 4, 5];

// // // // // // numbers.forEach(function (n) {
// // // // // //   console.log(n);
// // // // // // });

// // // // // // // or Arrow function in a callback
// // // // // // // numbers.forEach(function (n) {
// // // // // // //   console.log(n);
// // // // // // // });

// // // // // // // IIFE
// // // // // // (function () {
// // // // // //   const user = "john";
// // // // // //   console.log(user);
// // // // // //   const hello = () => console.log("Hello from the IIFE");
// // // // // //   hello();
// // // // // // })();

// // // // // // (function (name) {
// // // // // //   console.log("Hello " + name);
// // // // // // })("Shawn");

// // // // // // // named IIFE
// // // // // // (function hello() {
// // // // // //   console.log("Hello");
// // // // // //   //   hello() infinite loop
// // // // // // });

// // // // // // // challenge 1
// // // // // // function getCelsius(f) {
// // // // // //   const celsius = ((f - 32) * 5) / 9;
// // // // // //   return celsius;
// // // // // // }

// // // // // // console.log(getCelsius(50));

// // // // // const getCelsius = (f) => ((f - 32) * 5) / 9;

// // // // // console.log(`The temp is ${getCelsius(50)} \xB0c`);

// // // // // // challenge 2
// // // // // function minMax(arr) {
// // // // //   const min = Math.min(...arr);
// // // // //   const max = Math.max(...arr);
// // // // //   //   console.log(min);
// // // // //   //   console.log(max);

// // // // //   return {
// // // // //     min,
// // // // //     max,
// // // // //   };
// // // // // }

// // // // // console.log(minMax([1, 2, 3, 4, 5, 6]));

// // // // // // challenge 3
// // // // // ((length, width) => {
// // // // //   const area = length * width;

// // // // //   const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

// // // // //   console.log(output);
// // // // // })(20, 10);

// // // // // const x = 100;
// // // // // const y = 50;

// // // // // function getSum(n1, n2) {
// // // // //   const sum = n1 + n2;
// // // // //   return sum;
// // // // // }

// // // // // const sum1 = getSum(x, y);
// // // // // const sum2 = getSum(10, 5);

// // // // // console.log(sum1, sum2);

// // // // // call stack

// // // // // first Example
// // // // function first() {
// // // //   console.log("first...");
// // // // }

// // // // function second() {
// // // //   console.log("second...");
// // // // }

// // // // function third() {
// // // //   console.log("third...");
// // // // }

// // // // first();
// // // // second();
// // // // third();

// // // // if Statements

// // // if (true) {
// // //   console.log("This is true");
// // // }

// // // if (false) {
// // //   console.log("This is NOT true");
// // // }

// // // const x = 10;
// // // const y = 5;

// // // if (x >= y) {
// // //   console.log(`${x} is greater than or equal to ${y}`);
// // // }
// // // if (x === y) {
// // //   console.log(`${x} is equal to ${y}`);
// // // } else {
// // //   console.log(`${x} is NOT equal to ${y}`);
// // // }

// // // if (x !== y) {
// // //   const z = 20;
// // //   console.log(`${z} is 20`);
// // // }

// // const d = new Date(10, 30, 2022, 6, 0, 0);
// // const hour = d.getHours();
// // console.log(hour);

// // if (hour < 12) {
// //   console.log("Good Morning");
// // } else if (hour < 18) {
// //   console.log("Good Afternoon");
// // } else {
// //   console.log("Good Night");
// // }

// // // Nested If
// // if (hour < 12) {
// //   console.log("Good Morning");

// //   if (hour === 6) {
// //     console.log("Wake Up!");
// //   }
// // } else if (hour < 18) {
// //   console.log("Good Afternoon");
// // } else {
// //   console.log("Good Night");

// //   if (hour >= 20) {
// //     console.log("zzzzzzzz");
// //   }
// // }

// // // multiple conditions
// // if (hour >= 7 && hour < 15) {
// //   console.log("It is work Time");
// // }

// // // or
// // if (hour === 6 || hour === 20) {
// //   console.log("Brush Your Teeth");
// // }

// const d = new Date(2022, 1, 10, 19, 0, 0);
// const month = d.getMonth();
// const hour = d.getHours();

// switch ((n = month)) {
//   case 1:
//     console.log("It is January");
//     break;
//   case 2:
//     console.log("It is February");
//     break;
//   case 3:
//     console.log("It is March");
//     break;
//   default:
//     console.log("It is not Jan, Feb or March");
// }

// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
// switch (true) {
//   case hour < 12:
//     console.log("Good Morning");
//     break;
//   case hour < 18:
//     console.log("Good Afternoon");
//     break;
//   default:
//     console.log("Good Night");
// }
