import Button from "../../components/Button/Button";
import InputForm from "../../components/InputForm/InputForm";
import "./Register.css";
import { RegisterUser } from "../../services/authapi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    dispatch(RegisterUser(userData));
    navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const GoToLogin = () => {
    navigate("/login");
  };
  return (
    <div className="register-container">
      <div className="register">
        <h2 className="register-text">Register</h2>
      </div>
      <div className="register-form-container">
        <InputForm
          type="text"
          name="username"
          placeholder="Enter your username"
          onChange={handleInputChange}
        />
        <InputForm
          type="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInputChange}
        />
        <InputForm
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleInputChange}
        />
      </div>
      <div className="register-button-container">
        <Button onClick={handleSubmit} name="Register" />
      </div>
      <div onClick={GoToLogin} className="have-an-account-container">
        <p className="have-an-account-text">Already have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
