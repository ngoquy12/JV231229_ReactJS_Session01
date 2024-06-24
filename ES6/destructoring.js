// Với array
const colors = ["red", "green", "blue"];

// Truy xuất vào các phần tử của mảng
console.log(colors[1]);
console.log(colors[2]);

const [firstColor, secondColor, thirdColor, otherColor] = colors;

console.log("Fisrt: ", firstColor);
console.log("secondColor: ", secondColor);
console.log("thirdColor: ", thirdColor);
console.log("otherColor: ", otherColor);

// Với Object
const myInfo = {
  id: 1,
  userName: "Nguyễn Văn A",
  age: 12,
};

const { userName, age, id } = myInfo;

console.log("Age: ", age);
console.log("Id: ", id);
console.log("UserName: ", userName);

// Destructoring dùng để truy xuất phần tử trong mảng và Object một cách nhanh chóng
// giúp code dễ đọc, dễ nhìn và dễ dang bảo trì hơn
