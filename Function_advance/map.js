// Lặp qua các phần tử của mảng. Trả về một mảng mới có số lượng phàn tử bằng với
// SỐ lượng phần tử của mảng cũ nhưng "đã được chỉnh sửa"
const numbers = [1, 2, 3, 4, 5, 2, 2];

const newNumbers = numbers.map((number) => {
  return `
    <h1>${number}</h1>
  `;
});

console.log("NewNumber: ", newNumbers);
