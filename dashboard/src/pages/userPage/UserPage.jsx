import React, { useState, useEffect, useContext } from "react";
import "./userPage.css";
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";
import Loader from "../../components/loader/Loader";

const UserPage = () => {
  const [userData, setUserData] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [formData, setFormData] = useState({}); // State for form data
  const { userId } = useParams();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getUserData = async () => {
      try {
        let results = await axios.get(`https://netflix-analytics-4u5n.vercel.app/api/users/find/${userId}`, {
          headers: {
            token: 'Bearer ' + user.accessToken
          }
        });
        setUserData(results.data);
        setFormData(results.data); // Initialize form data with user data
      } catch (err) {
        console.log(err);
      }
    }
    getUserData();
  }, [userId, user.accessToken]); // Add dependencies

  if (!userData) return <Loader />

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
      setFormData({ ...formData, profilePic: e.target.files[0] });
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
  
  }

  return (
    <div className="userPage">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/newUser"}>
          {/* <button className="userAddButton">Create</button> */}
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={userData.profilePic ? userData.profilePic : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.94697898.1721580454&semt=sph"} alt="user" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{userData.username}</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PersonIcon className="userShowInfoIcon"></PersonIcon>
              <span className="userShowInfoTitle">{userData.username}</span>
            </div>
            <div className="userShowInfo">
              <TodayIcon className="userShowInfoIcon"></TodayIcon>
              <span className="userShowInfoTitle">01/04/2002</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <EmailIcon className="userShowInfoIcon"></EmailIcon>
              <span className="userShowInfoTitle">{userData.email}</span>
            </div>
            <div className="userShowInfo">
              <PhoneIcon className="userShowInfoIcon"></PhoneIcon>
              <span className="userShowInfoTitle">+91 9826776138</span>
            </div>
            <div className="userShowInfo">
              <LocationOnIcon className="userShowInfoIcon"></LocationOnIcon>
              <span className="userShowInfoTitle">Indore, M.P.</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm" encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder={userData.username} className="userUpdateInput" name="username" value={formData.username || ''} onChange={handleChange}></input>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder={userData.username} className="userUpdateInput" name="fullName" value={formData.fullName || ''} onChange={handleChange}></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="email" placeholder={userData.email} className="userUpdateInput" name="email" value={formData.email || ''} onChange={handleChange}></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="number" placeholder="9826776138" className="userUpdateInput" name="phone" value={formData.phone || ''} onChange={handleChange}></input>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="Indore" className="userUpdateInput" name="address" value={formData.address || ''} onChange={handleChange}></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={selectedImage ? selectedImage : (userData.profilePic ? userData.profilePic : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.1.94697898.1721580454&semt=sph")} alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} onChange={handleFileChange} />
              </div>
              <button className="userUpdateButton" type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
