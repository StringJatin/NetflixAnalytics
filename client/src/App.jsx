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
const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        {user && (
          <>
            <Route exact path="/" element={<Home />} />
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/series" element={<Home type="series" />} />
          </>
        )}
        <Route path="/" element={<Navigate to="/register" />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path ="/login" element={<Login/>}/>
        {
          user && (
            <>
            <Route path="/register" element={ <Navigate to="/" /> } />
            <Route path="/login" element={ <Navigate to="/" /> } />
            </>
          )
        }
      </Routes>
    </Router>
  );
};

export default App;
