
import React,{useState}  from "react";
import "../App.css";
const key= "43daf4a270afb8b9584a5a4f98d364bd";
const base="https://api.openweathermap.org/data/2.5/";
const MainList = ({ filter }) => {
  const [wet,setwet]=useState("");
    const [city,setCity]=useState("")

       
    const getWeather= async ()=>
    {
            
        const api_call=await fetch(`${base}weather?q=${city}&units=metric&APPID=${key}`)
        
        const data=await api_call.json()
      setwet(data);
      console.log(data)

    }    

  const {  setFilterDistance, setPlaceName } =filter;

  const submitHandler = (e) => {
    e.preventDefault();
    getWeather();
    setPlaceName(e.target[0].value); 
  };
  return (
<>

<div className="weather"style={{height:'auto',backgroundColor:'GrayText',color:'white'}} >  
{wet!=="" ? <>
  <div className="temp"
  >

 Temp:{wet.main.temp} celcius
 <br />
 Min -Temp: {wet.main.temp_min} celsius
 <br />
  MAx-Temp:{wet.main.temp_max} celsius


  </div>
 <div className="weathers">
 Humidity{wet.main.humidity}%
 <br />
  Weather:{wet.weather[0].main}
  <br />
  Wind Speed:{wet.wind.speed}
  <br />
   Wind DEg:{wet.wind.deg}
 </div>
    <div className="sunrise">

  Sunrise:  {new Date( parseInt(wet.sys.sunrise)*1000).toLocaleString()}
  <br />
  Sunset: {new Date( parseInt(wet.sys.sunset)*1000).toLocaleString()}
    </div>


</>:""}
 
</div>
    <div className="p-2 pb-3 ps-4 pe-4 shadow">

       
      <div className="mt-2">
        <div >
          <h3>Type City or State Name for better Search</h3>
        </div>
        <form
          className="d-flex align-itmes-center border-bottom "
          onSubmit={submitHandler}
          
        >
          <div className=" mt-2">
            <Search  />
          </div>
        
          <input
            className=" form-control w-100 border-0 form-control shadow-none fs-5  "
            type="search"
            placeholder="Search ..."
            style={{ color: "grey" ,fontWeight:'bold'}}
            onChange={((e)=>{setCity(e.target.value)})}
          />
        </form>
      </div>
      <div className="d-flex gap-2 mt-3">
        

       

        <select style={{fontWeight:'bolder',color: "gray"}}
          className=" w-100 rounded border border-gray ps-2 pe-2 p-1 fs-8  shadow-none"
          aria-label="Default select example"
        

          onChange={(e) => {
            setFilterDistance(e.target.value);
          }}
        >

          <option defaultValue  style={{ color: "gray" ,fontWeight:'bold'}}>Distance</option>
          <option value="1"  style={{ color: "gray" ,fontWeight:'bold'}}>Radius 1️⃣ (Km)</option>
          <option value="5"  style={{ color: "gray" ,fontWeight:'bold'}}>Radius 5️⃣ (Km)</option>
          <option value="10"  style={{ color: "gray" ,fontWeight:'bold'}}>Radius 1️⃣0️⃣ (Km)</option>
          <option value="50"  style={{ color: "gray" ,fontWeight:'bold'}}>Radius 5️⃣0️⃣ (Km)</option>
        </select>
        

          
      </div>
    </div>


    </>
  );
};

export default MainList;



const Search = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      fill="#4285F4"
      className="bi bi-search"
      viewBox="0 0 16 16"
      
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );
};
