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
import UserPage from  './pages/userPage/UserPage';
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";




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
          <Route path="/user/:userId" element={<UserPage/>} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product/>} />
          <Route path="/newProduct" element={<NewProduct/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
