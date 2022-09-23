import React, { useState, useEffect } from "react";
import './DrawSlide.scss'

function DrawSlide() {
  const slidesItem = [
    { id: 1, color: '#33a' },
    { id: 2, color: '#f3e074' },
    { id: 3, color: '#03c75a' },
    { id: 4, color: '#bfbfbf' },
    { id: 5, color: '#03c75a' },
    { id: 6, color: '#274662' },
    { id: 7, color: '#CBDFF1' },
  ];
  const [count, setCount] = useState(0);
  const [speed, setSpeed] = useState(1);

  function setSlides() {
    const side = 3;
    const addedFront = [];
    const addedLast = [];
    let index = 0;
    while (index < side) {
      addedLast.push(slidesItem[index % slidesItem.length])
      addedFront.unshift(slidesItem[slidesItem.length - 1 - index % slidesItem.length])
      index += 1;
    }
    return [...addedFront, ...slidesItem, ...addedLast];
  }

  useEffect(() => {
    if (speed > 15) {
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
    }, 7700 / speed);
    return () => {
      clearInterval(timer);
      clearInterval(timer3);
    };
  }, [speed]);

  function goDraw(e){
    e.preventDefault();
    setSpeed(20)
  }


  return (
    <div className="slider-area">
      <div className="slider">
        <div className="slider-list">
          <div className="slider-track">
            {
              setSlides().map((item) =>
                <div key={item.index} className="slider-item" >
                  <div id="drawitem" className="drawitem" style={{ backgroundColor: item.color, transform: `translateX(-${count * speed}px)`, transition: `transform 0.005s ease-in` }}>
                    {item.id}
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