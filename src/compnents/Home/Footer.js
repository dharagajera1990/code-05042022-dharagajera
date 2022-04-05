import React, {useState, useEffect} from 'react'
import Results from "./Results";


function Footer() {
  
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
    }, [])
     return (
            <div className="Footer">
                <ul className="footerLogo">
                    <li><a className="logo" href="#">Your Logo</a></li>
                    <li><span className="copyRight">© 2021 Company Name<br/> All rights reserved</span></li>
                </ul>
                <ul className="list">
                  <li className="items">Explore</li>
                  <li className="items">About Us</li>
                  <li className="items">Cities</li>
                  <li className="items"><a href="#">Call</a></li>
                </ul>
            </div>
      )

}
export default Footer;