
import React  from "react";
import "../App.css";

const MainList = ({ filter }) => {
  const {  setFilterDistance, setPlaceName } =

    filter;

  const submitHandler = (e) => {
    e.preventDefault();
    setPlaceName(e.target[0].value);
  };
  return (


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
