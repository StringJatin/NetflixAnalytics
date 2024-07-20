import { useEffect, useState, useRef } from "react";
import "./NewList.css";
import axios from "axios";

export default function NewList() {
  const [list, setList] = useState({
    title: "",
    genre: "",
    type: "",
    content: [],
  });
  const [movies, setMovies] = useState([]);
  const selectRef = useRef(null);

  useEffect(() => {
    const allMovies = async () => {
      try {
        const res = await axios.get("https://netflix-analytics-4u5n.vercel.app/api/movies/", {
          headers: {
            token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovies(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    allMovies();
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setList({ ...list, [e.target.name]: value });
  };

  const handleSelect = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    setList({ ...list, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (list) {
      const createMovie = async () => {
        try {
          const newMovie = await axios.post("https://netflix-analytics-4u5n.vercel.app/api/lists/", list, {
            headers: {
              token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          });
          console.log(newMovie);
          alert("New list is created");
          setList({
            title: "",
            genre: "",
            type: "",
            content: [],
          });
          if (selectRef.current) {
            selectRef.current.value = null;
          }
        } catch (err) {
          console.log(err);
        }
      };

      createMovie();
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New List</h1>
      <form className="addProductForm">
        <div className="formLeft">
          <div className="addProductItem">
            <label>Title</label>
            <input
              type="text"
              placeholder="Popular Movies"
              name="title"
              value={list.title}
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Genre</label>
            <input
              type="text"
              placeholder="action"
              name="genre"
              value={list.genre}
              onChange={handleChange}
            />
          </div>
          <div className="addProductItem">
            <label>Type</label>
            <select name="type" value={list.type} onChange={handleChange}>
              <option>Type</option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </div>
        </div>
        <div className="formRight">
          <div className="addProductItem">
            <label>Content</label>
            <select
              multiple
              name="content"
              onChange={handleSelect}
              ref={selectRef}
              style={{ height: "280px" }}
            >
              {movies.map((movie) => (
                <option key={movie._id} value={movie._id}>
                  {movie.title}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="addProductButton" onClick={handleSubmit}>
          Create
        </button>
      </form>
    </div>
  );
}
