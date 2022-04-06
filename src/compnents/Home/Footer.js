import React from 'react'

function Footer() {
     return (
            <div className="Footer">
                <ul className="footerLogo">
                    <li><a className="logo" href="/#">Your Logo</a></li>
                    <li><span className="copyRight">© 2021 Company Name<br/> All rights reserved</span></li>
                </ul>
                <ul className="footerlist">
                  <li>Explore</li>
                  <li>About Us</li>
                  <li>Cities</li>
                  <li><a href="/#">Call</a></li>
                </ul>
            </div>
      )

}
export default Footer;