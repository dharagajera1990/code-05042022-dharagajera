import React from 'react'
import chapter1 from '../../assets/images/chapter1.png'; 
import chapter2 from '../../assets/images/chapter2.png'; 
import chapter3 from '../../assets/images/chapter3.png'; 
import chapter4 from '../../assets/images/chapter4.png'; 

function Aboutus() {
     return (
        <>
            <h1 className="aboutusTitle">About Us</h1>
            <p className="titleDescription">Allow us to tell you a short story...</p>
            <div className="grid-container">
            
              <div className="itemsContainer">
                <img className='grid-item grid-item-3' src={chapter1} alt='' />
                <div className="itemContent">
                    <span>Chapter I</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                </div>
              </div>
              <div className="itemsContainer">
                <img className='grid-item grid-item-5' src={chapter2} alt='' />
                <div className="itemContent">
                    <span>Chapter II</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                </div>
              </div>
              <div className="itemsContainer">
                <img className='grid-item grid-item-6' src={chapter3} alt='' />
                <div className="itemContent">
                    <span>Chapter III</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                </div>
              </div>
              <div className="itemsContainer">
                <img className='grid-item grid-item-7' src={chapter4} alt='' />
                <div className="itemContent">
                    <span>Chapter IV</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                </div>
              </div>
            </div>
        </>
      )

}
export default Aboutus;