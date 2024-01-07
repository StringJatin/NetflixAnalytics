import React from "react";
import "./userPage.css";
import PersonIcon from '@mui/icons-material/Person';
import TodayIcon from '@mui/icons-material/Today';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from "react-router-dom";
const UserPage = () => {
  return (
    <div className="userPage">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to={"/newUser"}>
        <button className="userAddButton">Create</button>
        </Link>
        
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://media.licdn.com/dms/image/D4D03AQGiPrvtHlIGmQ/profile-displayphoto-shrink_800_800/0/1700829644867?e=1709769600&v=beta&t=UTPaQQV1gQeCR818q8_6DYWYZilLkunNuMckbWpHAFM" alt="" className="userShowImg"></img>
            <div className="userShowTopTitle">
              <span className="userShowUsername">Jatin Chouhan</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
            <PersonIcon className="userShowInfoIcon"></PersonIcon>
              <span className="userShowInfoTitle">Jatinodude</span>
            </div>
            <div className="userShowInfo">
            <TodayIcon className="userShowInfoIcon"></TodayIcon>
              <span className="userShowInfoTitle">01/04/2002</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
            <EmailIcon className="userShowInfoIcon"></EmailIcon>
              <span className="userShowInfoTitle">jatinchouhan1515@gmail.com</span>
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
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder="jatinodude" className="userUpdateInput"></input>
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder="Jatin Chouhan" className="userUpdateInput"></input>
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="email" placeholder="jatin@gmail.com" className="userUpdateInput"></input>
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="number" placeholder="9826776138" className="userUpdateInput"></input>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder="Indore" className="userUpdateInput"></input>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://media.licdn.com/dms/image/D4D03AQGiPrvtHlIGmQ/profile-displayphoto-shrink_800_800/0/1700829644867?e=1709769600&v=beta&t=UTPaQQV1gQeCR818q8_6DYWYZilLkunNuMckbWpHAFM" alt="" className="userUpdateImg"/>
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
