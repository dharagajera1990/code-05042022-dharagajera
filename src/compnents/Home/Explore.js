import React, {useState, useEffect} from 'react'
import Results from "./Results";
import chapter1 from '../../assets/images/chapter1.png'; 
import chapter2 from '../../assets/images/chapter2.png'; 


function Explore() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => {
          setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)
    }, []);
     return (
        <>
            <h1 className="aboutusTitle">Explore</h1>
            <p className="titleDescription">From one-guest rooms<br /> to penthouses with pools and gardens</p>
            <div className="grid-container">
            
              <div className="itemsContainer">
                <img className='grid-item grid-item-3' src={chapter1} alt='' />
                <div className="itemContent">
                    <div className="grid-container-explore">
                      <div className="explore-item1 font-18">Room with one king-size bed</div>
                      <div className="explore-item2"><a href="#" className="btnBackground font-18 rent-btn" >35$</a></div>
                      <div className="explore-item3"><a href="#" className="btnBackground font-18 rent-btn" >28м²</a></div>  
                      <div className="explore-item4"><a href="#" className="btnBackground font-18 font-ubantu book-btn" >Book!</a></div>
                    </div>
                </div>
              </div>
              <div className="itemsContainer">
                <img className='grid-item grid-item-5' src={chapter2} alt='' />
                <div className="itemContent">
                    <div className="grid-container-explore">
                      <div className="explore-item1 font-18">Room with one king-size bed</div>
                      <div className="explore-item2"><a href="#" className="btnBackground font-18 rent-btn" >2039$</a></div>
                      <div className="explore-item3"><a href="#" className="btnBackground font-18 rent-btn" >438м²</a></div>  
                      <div className="explore-item4"><a href="#" className="btnBackground font-18 font-ubantu book-btn" >Book!</a></div>
                    </div>
                </div>
              </div>
            </div>
        </>
      )

}
export default Explore;