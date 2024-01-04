import Topbar from "./components/topbar/Topbar";
import "./App.css"
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import User from "./pages/user/User";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="top">
          <Topbar/>
        </div>
        
        <div className="container">
        <Sidebar/>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
