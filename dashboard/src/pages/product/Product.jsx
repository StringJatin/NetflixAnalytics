import "./Product.css";
import { productData } from "../../dummyData";
import Chart from "../../components/chart/Chart";
import { Link, useParams } from "react-router-dom";
import Publish from "@mui/icons-material/Publish";
import { useEffect, useState } from "react";
import axios from "axios";
const Product = () => {
  const { productId } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/movies/find/${productId}`,
          {
            headers: {
              token:
              `Bearer ` + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovie();
  }, [productId]);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Movie</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart
            data={productData}
            dataKey="Sales"
            title="Sales Performance"
            size={3 / 1}
          />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src="https://www.digitaltrends.com/wp-content/uploads/2023/02/Apple-headset-render-Ahmed-Chenni-2-1500.jpg?fit=720%2C720&p=1"
              className="productInfoImg"
              alt=""
            />
            <span className="productName">{movie  ? `${movie.title}` : "Enter Title"}</span>
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
            <label>Movie Title</label>
            <input type="text" placeholder={movie ? `${movie.title}` : "Enter Title"} />
            <label>Genre</label>
            <select name="genre" id="genre">
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="documentary">Documentary</option>
              <option value="drama">Drama</option>
              <option value="family">Family</option>
              <option value="fantasy">Fantasy</option>
              <option value="history">History</option>
              <option value="horror">Horror</option>
              <option value="music">Music</option>
              <option value="mystery">Mystery</option>
              <option value="romance">Romance</option>
              <option value="science fiction">Science Fiction</option>
              <option value="thriller">Thriller</option>
              <option value="war">War</option>
              <option value="western">Western</option>
            </select>

            <label>Age Limit</label>
            <input type="text" placeholder={movie ? `${movie.limit}` : "Enter Limit"} />
            <label>Year</label>
            <input type="text" placeholder={movie ? `${movie.year}` : "Enter Year"} />
            <label>Trailer</label>
            <input type="file" placeholder={movie ? `${movie.limit}` : "Enter Limit"} />
            <label>Video</label>
            <input type="file" placeholder={movie ? `${movie.limit}` : "Enter Limit"} />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://www.digitaltrends.com/wp-content/uploads/2023/02/Apple-headset-render-Ahmed-Chenni-2-1500.jpg?fit=720%2C720&p=1"
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish className="productUploadIcon" />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
