import React, { useState, useEffect } from "react";
import './DrawSlide.scss'

function DrawSlide(props) {
  const { piece } = props;
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);

  function setSlides() {
    const side = 3;
    const addedFront = [];
    const addedLast = [];
    let index = 0;
    while (index < side) {
      
      addedLast.push(piece[index % piece.length])
      if (index <3) {
        addedFront.unshift(piece[piece.length - 1 - index % piece.length])
      }
    }
    index += 1;
    return [...addedFront, ...piece, ...addedLast];
  }

  useEffect(() => {
    if (speed === 30) {
      setCount(0)
    }
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 5);
    const timer3 = setInterval(() => {
      setCount(0);
      if (speed >= 5) {
        setSpeed(prev => prev - 5)
      }
    }, 9900 / speed);
    return () => {
      clearInterval(timer);
      clearInterval(timer3);
    };
  }, [speed]);

  function goDraw(e){
    e.preventDefault();
    setSpeed(30)
  }


  return (
    <div className="slider-area">
      <div className="slider">
        <div className="slider-list">
          <div className="slider-track" style={{ marginLeft:'-440px' }}>
            {
              setSlides().map((item) =>
                <div key={item.index} className="slider-item" >
                  <div id="drawitem" style={{ transform: `translateX(-${count * speed}px)`, transition: `transform 0.005s ease-in` }}>
                    <img src={item} alt="#" style={{ width:'200px', height:'200px' }} />
                    <h1 className="fs-20 notoBold" style={{ marginTop:'20px' }}>번</h1>
                  </div>
                  
                </div>
              )
            }
          </div>
        </div>
      </div >
      <button type="button" className="fs-18 notoBold goDraw" onClick={e=>goDraw(e)}>
              뽑기 (가격)
      </button>
    </div >
  );
}
export default DrawSlide;