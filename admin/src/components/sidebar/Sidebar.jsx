import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  PlayCircleFilledOutlined,
  NewReleases,
  ListAlt,
  ListAltOutlined,
  ListAltTwoTone,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { Person, PersonOffOutlined } from "@mui/icons-material";
import { List } from "@material-ui/core";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
          
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Users Menu</h3>
          <ul className="sidebarList">
            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Users
              </li>
            </Link>
           
           
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            
            
            
            <Link to="/movies" className="link">
              <li className="sidebarListItem">
                <PlayCircleFilledOutlined className="sidebarIcon" />
                Movies
              </li>
            </Link>
            
            <Link to="/newmovie" className="link">
            <li className="sidebarListItem">
              <NewReleases className="sidebarIcon" />
              Add New Movie/Serie
            </li></Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
          <Link to="/lists" className="link">
            <li className="sidebarListItem">
              <ListAlt className="sidebarIcon" />
              Movies/Series Lists
            </li></Link>
            <Link to="/newlist" className="link">
            <li className="sidebarListItem">
              <ListAltTwoTone className="sidebarIcon" />
               New List
            </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
