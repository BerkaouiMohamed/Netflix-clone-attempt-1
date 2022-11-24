import "./userList.css";

import { DeleteOutline, Visibility } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import axios from "axios";

export default function UserList() {
  const [userss, setUserss] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get("/users", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzAwN2JhM2QzNDZmNGNiNzBlMDVhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2OTAzNjMwNiwiZXhwIjoxNjY5NDY4MzA2fQ.TzmEPuxcxYCKYuWezosvmVxsLOpRbE2ee2ot-yf--hA",
          },
        });
        setUserss(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUsers();
  }, []);


  
  return (
    <div className="widgetSm">
    <span className="widgetSmTitle"> Members</span>
    <ul className="widgetSmList">
      {userss.map((user) => (
        <li className="widgetSmListItem">
          <img
            src={
              user.profilePic ||
              "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
            }
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">{user.username}</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"  />
            Display
          </button>
        </li>
      ))}
    </ul>
  </div>
  );
}
