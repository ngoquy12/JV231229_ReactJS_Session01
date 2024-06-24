// Phạm vi để import các file hoặc componnet
import "./header.css";

const Header = () => {
  // Phạm vi viết code js
  const userName = "Nguyễn Văn A";

  const user = {
    id: 1,
    name: "A",
    age: 12,
  };
  return (
    <>
      <p style={{ color: "red", fontSize: 20, fontWeight: 600 }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis debitis
        minima impedit delectus magnam quia doloremque, ipsum voluptatibus, cum
        perferendis amet accusamus quos sequi earum labore animi molestiae
        incidunt a!
      </p>
      <div>Tên: {userName}</div>
      <ul>
        <li>Id: {user.id}</li>
        <li>Name: {user.name}</li>
        <li>Age: {user.age}</li>
      </ul>
    </>
  );
};

export default Header;
