import "./Product.css";
import { productData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import { Link } from "react-router-dom";
import Publish from "@mui/icons-material/Publish";
const Product = () => {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" title="Sales Performance" size={3/1} />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://www.digitaltrends.com/wp-content/uploads/2023/02/Apple-headset-render-Ahmed-Chenni-2-1500.jpg?fit=720%2C720&p=1" className="productInfoImg" alt="" />
            <span className="productName">Apple Airpods</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">Id:</span>
              <span className="productInfoValue">123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active:</span>
              <span className="productInfoValue">Yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock:</span>
              <span className="productInfoValue">No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
            <div className="productFormLeft">
                <label>Product Name</label>
                <input type="text" placeholder="Apple Airpods"/>
                <label>In Stock</label>
                <select name="inStock" id="inStock">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
                <label>Active</label>
                <select name="inStock" id="inStock">
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                </select>
            </div>
            <div className="productFormRight">
                <div className="productUpload">
                    <img src="https://www.digitaltrends.com/wp-content/uploads/2023/02/Apple-headset-render-Ahmed-Chenni-2-1500.jpg?fit=720%2C720&p=1" alt="" className="productUploadImg"/>
                    <label for="file">
                        <Publish className="productUploadIcon"/>
                    </label>
                    <input type="file" id="file" style={{display:"none"}}/>


                </div>
                <button className="productButton">Update</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
