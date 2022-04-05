import React from "react";
import Header from "./header";
import Footer from "./Footer";
import Aboutus from "./Aboutus";
import Explore from "./Explore";
import chapter1 from '../../assets/images/chapter1.png'; 
import './style.css';
import { FaSearch,FaAngleDown } from 'react-icons/fa';
function index() {
  return (
    <div>
      <div className="banner">
        <Header />
        <div>
            <div className="bannerTitleWrapper">
              <h1 className="rethinkTitle">Rethink your living & renting</h1>
              <h3 className="bannerDescription">Make your stay painless with us</h3>
            </div>
            <div className="containerWrapper">
              <div className="searchfilter">
                  <div className="inputbox">
                    <label>CITY</label>
                    <select placeholder="Select your city">
                        <option>Select Your City</option>
                        <option>Ahmedabad</option>
                        <option>Bhavnagar</option>
                        <option>Surat</option>
                    </select>
                  </div>
                  <div className="inputbox">
                    <label>DATES</label>
                    <input type="date" placeholder="Select your dates" />
                  </div>
                  <div className="inputbox">
                    <label>GUESTS</label>
                    <input type="text" placeholder="Add guests" />
                  </div>
                  <div className="inputbox" id="search-bar">
                    <a href="#"><FaSearch size={30} /><span>Search</span></a>
                  </div>
              </div>
            </div>
            <div className="expandMore">
              <FaAngleDown size={60} style={{ fill: 'white' }} />
            </div>
        </div>
      </div>
      <div className="containerWrapper">
        <Explore />
        <Aboutus />
        <Footer />
      </div>
    </div>
  );
}

export default index;
