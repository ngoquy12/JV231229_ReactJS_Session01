const sum = (...numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
};

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 2));
console.log(sum(1, 2));

// Rest parameter sử dụng trong trường hợp không thể xác định trước được số lượng
// đối số truyền vào trong hàm. Nó gom các tham số thành một "mảng"
