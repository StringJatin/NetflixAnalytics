import "./Register.scss"
import logo from '../../images/Netflix_Logo_RGB.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [passView,setPassView] = useState(false);
    
    const handleStart = ()=>{
      setPassView(true);
    }
    const navigate = useNavigate();
    const handleFinish = async (e) => {
      e.preventDefault();
      const username = email.split("@")[0];
      try {
        await axios.post("https://netflix-analytics-4u5n.vercel.app/api/auth/register", { email, username, password });
        alert("user is created");
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
       {!passView ? ( <div className="input" >
            <input type="email" placeholder="Enter your email address" value={email} onChange={(e)=>setEmail(e.target.value)}  ></input>
            <button className="registerButton" onClick={handleStart} >Get Started</button>
        </div>) : 
        ( <form className="input" >
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  ></input>
            <button className="registerButton" onClick={handleFinish}  >Start</button>
        </form>)
        }
      </div>
    </div>
  )
}

export default Register
