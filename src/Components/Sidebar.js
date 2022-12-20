import { ArtTrackOutlined, EmojiEmotions, EmojiNatureRounded, Fastfood, HomeSharp, MailOutline } from "@material-ui/icons";
import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import '../App.css'
const Sidebar = () => {
  
  const params = useParams();

  return (
    <div
      className="d-flex flex-column flex-shrink-0 bg-dark h-100 s"
      style={{ width: "4.5rem" }}
    >
      <a
        href="/"
        className="d-block m-auto  link-dark text-decoration-none mt-4"
        title=""
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-original-title="Icon-only"
      >
        <HomeSharp  style={{fontSize:'50px',color:'white'}} />
      </a>
      <div className="h-100 d-flex ">
        <ul className="nav nav-pills nav-flush m-auto flex-column  text-center h-50  justify-content-around">
         
          <li className="nav-item">
            <Link to="/Map/restaurants">
              <Fastfood  style={{fontSize:'50px'}} color={params.id === "restaurants" ? "#4285F4" : "gray"} />
            </Link>
          </li>

         
          <li className="nav-item" >
            {" "}
            <Link to="/Map/attractions">
              <EmojiEmotions style={{fontSize:'50px'}}color={params.id === "attractions" ? "#4285F4" : "gray"} />
            </Link>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Sidebar;


