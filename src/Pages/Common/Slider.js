import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import img5 from '../../assets/images/banner/5.jpg'
import img6 from '../../assets/images/banner/6.jpg'

const Slider = () => {
  return (
    <AwesomeSlider>
      <div>
        <img src={img1} alt="" />
        
      </div>
      <div>
        <img src={img2} alt="" />
        
      </div>
      <div>
        <img src={img3} alt="" />
        
      </div>
      <div>
        <img src={img4} alt="" />
        
      </div>
      <div>
        <img src={img5} alt="" />
        
      </div>
      <div>
        <img src={img6} alt="" />
        
      </div>
    </AwesomeSlider>
  );
};

export default Slider;
