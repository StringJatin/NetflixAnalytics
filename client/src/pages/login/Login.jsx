import "./Login.scss"
import logo from '../../images/Netflix_Logo_RGB.png'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/ApiCalls";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
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
    await login({ email, password }, dispatch);
  };
  return (
    <div className='login'>
    
    <div className="top">
    <div className="wrapper">
        <img src={logo}
         className="logo">
        </img>
        
      </div>
    </div>
      
      <div className="container">
       <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email or Phone number" onChange={(e)=>setEmail(e.target.value)} ></input>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} ></input>
        <button className="loginButton" onClick={handleLogin} disabled={isFetching}>Sign In</button>
        <span>
          New to Netflix? 
          <Link to={"/register"}><b>Sign Up now.</b></Link>
          
        </span>
        <small>
          This page is protected by Google reCAPTCHA to ensure you are not a bot. <b>Learn More.</b>
        </small>
       </form>
      </div>
    </div>
  )
}

export default Login
