import React from "react";
import "../App.css";
import LocationOn from "@material-ui/icons/LocationOn";
const Place = ({ el }) => {
  const photo = el.photo ? el.photo : "";
  const img = photo.images ? photo.images : "";

  return (
    <>
      {img ? (
        <>
          <div  style={{color:'Blue'}}>
       
        <div className="card shadow p-1 mLocation" style={{ width: "4.5rem" ,backgroundColor:'black',color:'white' }}>
        <p className="text-secodary p-0 m-0">{el.name}</p>
        <img
            className="card-img-top p-0 mt-1 m-0"
            src={img.medium ? img.medium.url : img.small.url}
            alt="Card image cap"
          />
        </div>
        <LocationOn fontSize="large" sx={{fontWeight:'bold'}} />
        </div>  

</>
      ) : null}
    </>
  );
};

export default Place;


