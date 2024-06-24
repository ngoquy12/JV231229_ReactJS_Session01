const numbers = [1, 2, 3, 4, 5, 2, 2];

// const find = (array, value) => {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       return array[i];
//     }
//   }
//   return null;
// };

const find = numbers.find((number) => {
  return number === 1;
});

console.log(find);

// Trả về phần tử đầu tiên mà nó tìm thấy.
// Ứng dụng trong trường hợp tìm kiếm và trả về một kết quả duy nhất
