import React, { useContext, useEffect, useState } from "react";
import "./WidgetSm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import axios from "axios";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";
const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState();
  const {dispatch} = useContext(AuthContext);
  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get(
          "https://netflix-analytics-4u5n.vercel.app/api/users?new=true",
          {
            headers: {
              token:
              'Bearer ' + JSON.parse(localStorage.getItem("user")).accessToken,
            },
          }
        );
        setNewUsers(res.data);
      } catch (err) {
        if (err.response && err.response.status === 403) {
          localStorage.removeItem("user");
          dispatch(logout());
          window.location.reload();
        } else {
          console.log(err);
        }
      }
    };
    getNewUsers();
  }, [newUsers]);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers ? newUsers.map((user)=>(
          <li className="widgetSmListItem">
          <img
            className="widgetSmImage"
            src={user.profilePic ? user.profilePic : "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"}
            alt=""
            height="30px"
            width="30px"
          ></img>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
          </button>
        </li>
        )

        ):(
          <li className="widgetSmListItem">
          <img
            className="widgetSmImage"
            src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"
            alt=""
            height="30px"
            width="30px"
          ></img>
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Anna Keller</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon />
          </button>
        </li>
        ) }
        
       
      </ul>
    </div>
  );
};

export default WidgetSm;
