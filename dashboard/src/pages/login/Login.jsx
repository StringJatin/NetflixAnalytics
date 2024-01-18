import { useContext, useState, useEffect } from "react";
import "./Login.css";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginapi } from "../../context/authContext/ApiCalls";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch, user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to "/" after successful login
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    await loginapi({ email, password }, dispatch);
  };

  return (
    <div className="loginPage">
      <div className="loginHeading">
        <h3 className="loginTitle">Netflix Analytics</h3>
        <span className="loginSubtitle">Enter Below Credentials to Login</span>
        <span className="loginSubtitle">Email: admin@gmail.com</span>
        <span className="loginSubtitle">Password: admin</span>
      </div>
      <div className="loginForm">
        <form className="form">
          <div className="loginInputItem">
            <label>Email</label>
            <input
              type="email"
              className="emailInput"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="loginInputItem">
            <label>Password</label>
            <input
              type="password"
              className="passwordInput"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="loginInputItem">
            <button className="submitBtn" onClick={handleLogin} disabled={isFetching}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
