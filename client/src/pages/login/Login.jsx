import "./Login.scss"
import logo from '../../images/Netflix_Logo_RGB.png'

const Login = () => {
   
    
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
        <input type="email" placeholder="Email or Phone number"></input>
        <input type="password" placeholder="Password"></input>
        <button className="loginButton">Sign In</button>
        <span>
          New to Netflix? <b>Sign Up now.</b>
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
