// Đối với mảng

const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];

const array3 = [...array1]; // Copy mảng array1
// const array4 = array1.concat(array2);
const array4 = [...array2, ...array1, ...array3]; // [1,2,3,4,5,6, 7,8 ]

console.log("Array3: ", array3);
console.log("Array4: ", array4);

// Đối với đối tượng
const myInfo = {
  id: 1,
  userName: "Nguyễn Văn A",
};

const myAge = {
  age: 1,
};

const newMyInfo = { ...myInfo, ...myAge };
console.log("New my info: ", newMyInfo);
