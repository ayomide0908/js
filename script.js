// const post = {
//   id: 1,
//   title: "Post One",
//   body: "This is the body",
// };

// // convert to json string
// const str = JSON.stringify(post);

// // Parse JSON
// const obj = JSON.parse(str);

// // const posts = [
// //   {
// //     id: "1",
// //     title: "Post One",
// //     body: "This is the body",
// //   },
// //   {
// //     id: "2 ",
// //     title: "Take out Trash",
// //   },
// // ];

// // const str2 = JSON.stringify(posts);

// // // console.log(str2);

// // // Object Challenge

// // // step 1
// // const library = [
// //   {
// //     title: "THe Road Ahead",
// //     author: "Bill gates",
// //     status: {
// //       own: true,
// //       reading: false,
// //       read: false,
// //     },
// //   },
// //   {
// //     title: "Steve jobs",
// //     author: "walter Isaacson",
// //     status: {
// //       own: true,
// //       reading: false,
// //       read: false,
// //     },
// //   },
// //   {
// //     title: "Mockingjay",
// //     author: "Suzane collins",
// //     status: {
// //       own: true,
// //       reading: false,
// //       read: false,
// //     },
// //   },
// // ];

// // // step 2
// // library[0].status.read = true;
// // library[1].status.read = true;
// // library[2].status.read = true;

// // console.log(library);

// // // // step 3
// // const { title: firstBook } = library[0];

// // console.log(firstBook);

// // // // step 4
// // const libraryJSON = JSON.stringify(library);

// // console.log(libraryJSON);

// function sayHello() {
//   console.log("hello world");
// }

// sayHello();

// function add(num1, num2) {
//   console.log(num1 + num2);
// }

// add(5, 10);

// function subtract(num1, num2) {
//   return num1 - num2;

//   console.log("After the return");
// }

// const result = subtract(10, 2);

// console.log(result, subtract(20, 5));

function registerUser(user = "tolu") {
  return user + " is registered";
}
console.log(registerUser());

// Rest Params
function sum(...numbers) {
  let total = 0;

  for (const num of numbers) {
    total += num;
  }

  return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 100, 10));

// objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "steve",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "saraki",
  })
);

// Arrays as params
function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
