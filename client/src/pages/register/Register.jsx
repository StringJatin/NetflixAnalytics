import "./Register.scss"
import logo from '../../images/Netflix_Logo_RGB.png'
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleStart = ()=>{
        setEmail(emailRef.current.value);
    }
    const navigate = useNavigate();
    const handleFinish = async (e) => {
      e.preventDefault();
      setPassword(passwordRef.current.value);
      const username = email.split("@")[0];
      try {
        await axios.post("https://netflix-analytics-4u5n.vercel.app/api/auth/register", { email, username, password });
        console.log("user is created");
        navigate("/login");
      } catch (err) {
        console.error('Error during registration:', err);
      }
    };
    


  

  return (
    <div className='register'>
    
    <div className="top">
    <div className="wrapper">
        <img src={logo}
         className="logo">
        </img>
        <button className="loginButton" >
        Sign In
        </button>
      </div>
    </div>
      
      <div className="container">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h2>Watch anywhere. Cancel anytime</h2>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
       {!email ? ( <div className="input" >
            <input type="email" placeholder="Enter your email address"  ref={emailRef} ></input>
            <button className="registerButton" onClick={handleStart} >Get Started</button>
        </div>) : 
        ( <form className="input" >
            <input type="password" placeholder="Password"  ref={passwordRef} ></input>
            <button className="registerButton" onClick={handleFinish}  >Start</button>
        </form>)
        }
      </div>
    </div>
  )
}

export default Register
