import React, {useState, useEffect} from 'react'
import Results from "./Results";
import chapter1 from '../../assets/images/chapter1.png'; 
import chapter2 from '../../assets/images/chapter2.png'; 
import chapter3 from '../../assets/images/chapter3.png'; 
import chapter4 from '../../assets/images/chapter4.png'; 

function Aboutus() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
 


    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
    }, []);
     return (
        <>
            <h1 className="aboutusTitle">About Us</h1>
            <p className="titleDescription">Allow us to tell you a short story...</p>
            <div className="grid-container">
            
              <div className="itemsContainer">
                <img className='grid-item grid-item-3' src={chapter1} alt='' />
                <div className="itemContent">
                    <p>Chapter I</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</span>
                </div>
              </div>
              <div className="itemsContainer">
                <img className='grid-item grid-item-5' src={chapter2} alt='' />
                <div className="itemContent">
                    <p>Chapter II</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</span>
                </div>
              </div>
              <div className="itemsContainer">
                <img className='grid-item grid-item-6' src={chapter3} alt='' />
                <div className="itemContent">
                    <p>Chapter III</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</span>
                </div>
              </div>
              <div className="itemsContainer">
                <img className='grid-item grid-item-7' src={chapter4} alt='' />
                <div className="itemContent">
                    <p>Chapter IV</p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</span>
                </div>
              </div>
            </div>
        </>
      )

}
export default Aboutus;