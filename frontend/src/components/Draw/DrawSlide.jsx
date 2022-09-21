import React, { useState, useEffect } from "react";
import './DrawSlide.scss'

function DrawSlide() {
  const slides = [
    { id: -1, color: '#274662' },
    { id: 0, color: '#CBDFF1' },
    { id: 1, color: '#33a' },
    { id: 2, color: '#f3e074' },
    { id: 3, color: '#03c75a' },
    { id: 4, color: '#bfbfbf' },
    { id: 5, color: '#03c75a' },
    { id: 6, color: '#274662' },
    { id: 7, color: '#CBDFF1' },
  ];
  const [count, setCount] = useState(0);
  const [selected,setSelected] = useState(0);


  useEffect(() => {
    const timer = setInterval(() => {
      setCount(prev => prev + 1);
    }, 10);
    const timer2 = setInterval(() => {
      setSelected(prev => prev + 1);
    }, 2000);
    return () => {
      clearInterval(timer);
      clearInterval(timer2);
    };
  }, []);

  console.log(selected)

  return (
    <div className="slider-area">
      <div className="slider">
        <div className="slider-list">
          <div className="slider-track">
            {
              slides.map((item) =>
                <div key={item.id} className="slider-item" >
                  <div style={{ backgroundColor: item.color, transform: `translateX(-${count * 1}px)`, transition: "transform 0.010s ease-in" }}>
                    {item.id}
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </div >
    </div >
  );
}
export default DrawSlide;