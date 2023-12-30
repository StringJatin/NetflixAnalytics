import "./Register.scss"
import logo from '../../images/Netflix_Logo_RGB.png'
import { useRef, useState } from "react"
import { Password } from "@mui/icons-material";
const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleStart = ()=>{
        setEmail(emailRef.current.value);
    }
    const handleFinish = ()=>{
        setEmail(passwordRef.current.value);
    }
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
            <input type="email" placeholder="Enter your email address" ref={emailRef} ></input>
            <button className="registerButton" onClick={handleStart} >Get Started</button>
        </div>) : 
        ( <form className="input" >
            <input type="password" placeholder="Password" ref={passwordRef} ></input>
            <button className="registerButton" onClick={handleFinish} >Start</button>
        </form>)
        }
      </div>
    </div>
  )
}

export default Register
