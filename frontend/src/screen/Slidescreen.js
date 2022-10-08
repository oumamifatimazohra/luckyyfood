
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css"
import React from 'react';



  
const Slidescreen = ({images}) => {
  
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
  autoplaySpeed: 2000,
   
  };

  return (
    <div className="Sliderhero">
   
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <div>
              <img src={item.src}  alt={item.alt} />
              </div>
              <div className="Slidecontent">
              <h1 className="Orange">{item.title}</h1>
              <h2 className="Subtitle">{item.subtitle}</h2>
              <h2 className="Price">{item.price}</h2>
              <button type="button" className="Button">Order Now</button>
              </div>
            </div>
            
          ))}
          
        </Slider>
        
      </div>
     
      
    </div>
  )
}
export default Slidescreen;

//how to do a slide in reactjs?