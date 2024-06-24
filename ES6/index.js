// Từ khóa khai báo: var, let, const
var userName = "Nguyễn Văn A"; // Khai báo biến
userName = "Nguyễn Văn B"; // Gán lại giá trị

console.log(age);
var age = 10;

var address;
console.log(address);

console.log("UserName: ", userName);

// Khi file .js được chạy, nó sẽ quét hết tất cả các biến được khai báo, từ khóa nào được khai báo với var sẽ được đưa lên trên đầu, tuy nhiên
// giá trị của biến đó là undifined

// => var:
// + Có thể khai báo lại
// + Có thể gán lại được giá trị
// + Có cơ chế hosting
// + Phạm vi global

// Từ khóa let

let gender = "Nam";
// let gender = "Nữ"; // Khai báo lại
gender = "Nữ";

console.log("Giới tính: ", gender);

// TỪ khóa let:
// + Có thể gán lại giá trị
// + Không thể khai báo lại

// Từ khóa const
const PI = Math.PI;
const MALE = 0;
const FEMALE = 1;

// const PI = 3.15
// PI = 3.15;
// console.log(PI);

// Từ khóa const:
// + Không thẻ khai báo và gán lại được giá trị

// Temporal Dead Zone: Đối với từ khóa var sẽ không có TDZ
// Tù khóa let, const vẫn có hosting, tuy nhiên giá trị của nó sẽ được nằm trong TDZ (vùng chết tạm thời). Cho nên,
// Khai chúng ta sử dụng biên trước khi khởi tạo nó sẽ báo lỗi
