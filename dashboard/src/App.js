import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  // Navigate,
} from "react-router-dom";
import User from "./pages/user/User";
import UserPage from "./pages/userPage/UserPage";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authContext/AuthContext";
import MovieLists from "./pages/movieLists/MovieLists";
import List from "./pages/List/List";
import NewList from "./pages/newList/NewList";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div className="App">
      {
        !user && <>
        <Routes>
          {/* Show Login component if user is not authenticated */}
          { <Route path="/" element={<Navigate to={"/login"} />} />}
          
        </Routes>
        </>
        
      }
      <Routes>
        <Route path="/login" element={<Login/>}/>
      </Routes>
        {user && (
          <>
            <div className="top">
              <Topbar />
            </div>
            <div className="container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element={<User />} />
                <Route path="/user/:userId" element={<UserPage />} />
                <Route path="/newUser" element={<NewUser />} />
                <Route path="/movies" element={<ProductList />} />
                <Route path="/product/:productId" element={<Product />} />
                <Route path="/newProduct" element={<NewProduct />} />
                <Route path="/movieLists" element={<MovieLists />} />
                <Route path="/movieLists/:id" element={<List />} />
                <Route path="/newList" element={<NewList />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
