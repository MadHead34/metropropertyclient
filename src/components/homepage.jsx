import React from "react";
import Navbar from "./navabar";
import Agents from "./agenst";
import Property from "./property";
import PropertySearchFrom from './propertysearchform';
const HomePage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container" style={{ border: "1px solid red" }}>
        <div className="row" style={{ position: "relative" }}>
          <img src="/images/metro.jpg" alt="" />
          <div style={{ position: "absolute", top: "50px", left: "600px" }}>
            <img src="/images/metrologo.jpg" alt="" />
          </div>
        </div>
      </div>
      <PropertySearchFrom/>
      <Property/>
      <Agents />
      <div className="container-fluid">
            <div className="container mt-5">
                <div className="row">
                    <img src="/images/house.jpg" alt="" />
                </div>
            </div>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
