// forEach dùng để duyệt qua các phần tử của mảng
// Tham số truyền vào gồm: (Phàn tử của mảng, index, tên mảng nó lặp qua)
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((number, index, array) => {
  console.log(number, index, array);
});
