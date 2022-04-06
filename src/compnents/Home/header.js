import React, {useState, useEffect} from 'react'
import { FaAngleDown } from 'react-icons/fa';

function Header() {
      const [toggleMenu, setToggleMenu] = useState(false);
      const [screenWidth, setScreenWidth] = useState(window.innerWidth);
      const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
 console.log("in header");

useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
}, [])
     return (
        <nav>
            <div className="menu-wapper">
                <a className="logo" href="/#">Your Logo</a>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className="list">
                      <li className="items">Explore</li>
                      <li className="items">About Us</li>
                        <ul class="subnav">
                          <li className="items subnavbtn">Cities <FaAngleDown style={{ fill: 'white' }} /></li>
                            <ul class="subnav-content">
                              <li><a href="#company">Admedabad</a></li>
                              <li><a href="#team">Surat</a></li>
                              <li><a href="#careers">Bhavnagar</a></li>
                            </ul>
                        </ul>
                      <li className="items"><a href="/#">Call</a></li>
                    </ul>
                )}

                <button onClick={toggleNav} className="btn">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </button>
            </div>
        </nav>
      )

}
export default Header;