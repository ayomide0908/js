const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

// convert to jason string
const str = JSON.stringify(post);
 
// Parse JSON
const obj = JSON.parse(str);

const posts = [
  {
    id: "1",
    title: "Post One",
    body: "This is the body",
  },
  {
    id: "2 ",
    title: "Take out Trash",
  },
];

const str2 = JSON.stringify(posts);

console.log(str2);
