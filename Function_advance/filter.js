const users = [
  {
    id: 1,
    name: "A",
    age: 21,
  },
  {
    id: 2,
    name: "A",
    age: 22,
  },
  {
    id: 3,
    name: "B",
    age: 21,
  },
];

// const filterUser = (users, value) => {
//   const array = [];
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].name === value) {
//       array.push(users[i].name);
//     }
//   }

//   return array;
// };

const filterUser = users.filter((user) => {
  return user.name === "A";
});

console.log(filterUser);
