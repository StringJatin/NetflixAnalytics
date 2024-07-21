import "./app.scss";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { useContext } from "react";
import AuthReducer from "./context/authContext/AuthReducer.js";
import { AuthContext } from "./context/authContext/AuthContext.jsx";
const App = () => {
  const {user} = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        {user && (
          <>
            <Route exact path="/" element={<Home  />} />
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={ <Watch/> } />
          </>
        )}
        <Route path="/" element={<Navigate to="/login" />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path ="/login" element={<Login/>}/>
        {/* {
          !user && (
            <>
            <Route path="/" element={ <Navigate to={"/login"} /> } />
            <Route path="/register" element={ <Register /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/watch" element={ <Watch/> } />

            </>
          )
        } */}
      </Routes>
    </Router>
  );
};

export default App;
