console.log(getName("A"));

function getName(myName) {
  return myName;
}

// Tham số là những giá trị được truyền vào tại thời điểm điểm hàm được khai báo
// Đối số là những giá trị được truyền vào tại thời điểm điểm hàm được gọi

const getStatus = (status) => {
  console.log(status);
  return 1; // Bắt buộc để hàm trả về được giá trị
};

console.log(getStatus("Đang hoạt động"));
// Arrow function khác với function thường ở điểm sau:
// + Không có ngữ cảnh (Không có từ khóa this)
// + Không có cơ chế hosting
