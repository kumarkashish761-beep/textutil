import React from "react";
// import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <>      
      <div className="nav">
        <ul>
          <li>Textutil</li>
          <li>About</li>
           <li>Contact us</li>
        </ul>
        <div>
          {/* <input placeholder="search here " />
          <button>search</button> */}
          <button className="theme" onClick={()=>{props.togglemode()
          }} >
            {props.btntext}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
