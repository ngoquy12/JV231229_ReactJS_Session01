// export thường
export const formatName = (name) => {
  return `Tên của bạn là: ${name}`;
};

const formatDate = () => {};

// export default
const formatMoney = (money) => {
  new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(money);
};

export default formatMoney;

// Đối với export thường thì bắt buộc phải bọc ben trong {},
// còn export default không cần bọc bên trong {}

// Trong trường hợp một file có nhiều biến, hàm thì dùng export thường
// trường hợp một file chỉ có một biến hoặc hàm thì nên dùng export default
