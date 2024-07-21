import { useState } from "react";
import "./newProduct.css";
import storage from "../../firebase";
import axios from "axios";

export default function NewProduct() {
  // Initial state for movie details and file uploads
  const initialMovieState = {};
  const initialFileState = null;

  // State to store movie details and file uploads
  const [movie, setMovie] = useState(initialMovieState);
  const [img, setImg] = useState(initialFileState);
  const [imgTitle, setImgTitle] = useState(initialFileState);
  const [imgSm, setImgSm] = useState(initialFileState);
  const [trailer, setTrailer] = useState(initialFileState);
  const [video, setVideo] = useState(initialFileState);
  const [uploaded, setUploaded] = useState(0);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  // Handle change for text inputs and select dropdowns
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  // Function to upload files to Firebase storage
  const uploadFiles = (items) => {
    setIsUploading(true);
    let completedUploads = 0; // Variable to track completed uploads
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("File upload error:", error);
        },
        async () => {
          const url = await uploadTask.snapshot.ref.getDownloadURL();
          setMovie((prev) => ({ ...prev, [item.label]: url }));
          completedUploads += 1; // Increment completed uploads
          setUploaded((prev) => prev + 1);
          if (completedUploads === items.length) {
            setIsUploading(false); // Reset uploading state when all files are uploaded
          }
        }
      );
    });
  };

  // Handle upload button click
  const handleUpload = (e) => {
    e.preventDefault();
    setUploaded(0); // Reset the upload count
    const items = [
      { file: img, label: "img" },
      { file: imgTitle, label: "imgTitle" },
      { file: imgSm, label: "imgSm" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ];
    uploadFiles(items);
  };

  // Handle create button click
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://netflix-analytics-4u5n.vercel.app/api/movies/', movie, {
        headers: {
          token: 'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });

      if (!res.data) {
        throw new Error('Failed to create movie');
      }

      alert("Movie created successfully!");

      // Reset all states to their initial values
      setMovie(initialMovieState);
      setImg(initialFileState);
      setImgTitle(initialFileState);
      setImgSm(initialFileState);
      setTrailer(initialFileState);
      setVideo(initialFileState);
      setUploaded(0);
      setUploadProgress(0);
      // Clear the file input values
      document.getElementById("img").value = null;
      document.getElementById("imgTitle").value = null;
      document.getElementById("imgSm").value = null;
      document.getElementById("trailer").value = null;
      document.getElementById("video").value = null;
    } catch (err) {
      console.error("Error creating movie:", err);
    }
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="img" onChange={(e) => setImg(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title Image</label>
          <input type="file" id="imgTitle" onChange={(e) => setImgTitle(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Thumbnail Image</label>
          <input type="file" id="imgSm" onChange={(e) => setImgSm(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text" name="title" onChange={handleChange} value={movie.title || ''} />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" name="desc" onChange={handleChange} value={movie.desc || ''} />
        </div>
        <div className="addProductItem">
          <label>Year</label>
          <input type="text" name="year" onChange={handleChange} value={movie.year || ''} />
        </div>
        <div className="addProductItem">
          <label>Genre</label>
          <input type="text" name="genre" onChange={handleChange} value={movie.genre || ''} />
        </div>
        <div className="addProductItem">
          <label>Duration</label>
          <input type="text" name="duration" onChange={handleChange} value={movie.duration || ''} />
        </div>
        <div className="addProductItem">
          <label>Limit</label>
          <input type="text" name="limit" onChange={handleChange} value={movie.limit || ''} />
        </div>
        <div className="addProductItem">
          <label>Is Series?</label>
          <select name="isSeries" onChange={handleChange} value={movie.isSeries || 'false'}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trailer</label>
          <input type="file" id="trailer" onChange={(e) => setTrailer(e.target.files[0])} />
        </div>
        <div className="addProductItem">
          <label>Video</label>
          <input type="file" id="video" onChange={(e) => setVideo(e.target.files[0])} />
        </div>
        <button 
          className={`addProductButton ${isUploading ? 'uploading' : ''}`} 
          onClick={uploaded === 5 ? handleCreate : handleUpload} 
          disabled={isUploading}
        >
          {isUploading ? `Uploading (${Math.round(uploadProgress)}%)` : (uploaded === 5 ? 'Create' : 'Upload')}
        </button>
      </form>
    </div>
  );
}
