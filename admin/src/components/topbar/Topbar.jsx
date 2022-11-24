import React, { useContext } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Logout } from "@mui/icons-material";
import { AuthContext } from "../../context/authContext/AuthContext";
import { logout } from "../../context/authContext/AuthActions";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">NETFLIX ADMIN</span>
        </div>
        <div className="topRight">
       
          <div className="topbarIconContainer">
            <Logout onClick={() => dispatch(logout())}/>
          </div>
        </div>
      </div>
    </div>
  );
}
