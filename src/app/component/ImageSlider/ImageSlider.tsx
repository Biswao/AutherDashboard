import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import testi1 from '../../utils/testi/aa.jpeg';
import testi2 from '../../utils/testi/as.jpeg';
import testi3 from '../../utils/testi/ad.jpeg';
import testi6 from '../../utils/testi/ah.jpeg';
// import './ImageSlider.css';

export default function ImageSlider() {
  const settings = {
    dots: true,
    autoplay: true,
  };
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        
        <div>
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-2" style={{textAlign:'center'}}>
                    <img src= {testi1.src} style={{width:'90px',height:'90px',borderRadius:'50%'}} />
                    </div>
                    <div className="col-lg-10">
                    <p>"Thank you for your comments and corrections of my paper- it is done in much more professional way."</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                    <img src= {testi2.src} style={{width:'90px',height:'90px',borderRadius:'50%'}} />
                    </div>
                    <div className="col-lg-10">
                    <p>"Please send my great appreciation to the editors, they have done a wonderful job. I am very confident now in submitting my work to the journal. 
                        I will certainly recommend your service to any researcher who needs such kind of service."</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                    <img src= {testi3.src} style={{width:'90px',height:'90px',borderRadius:'50%'}} />
                    </div>
                    <div className="col-lg-10">
                    <p>"Many thanks for your excellent work and the comments. I like it very much, Appreciated."</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
        <div className="container">
                <div className="row">
                    <div className="col-lg-2">
                    <img src= {testi6.src} style={{width:'90px',height:'90px',borderRadius:'50%'}} />
                    </div>
                    <div className="col-lg-10">
                    <p>"My research paper was handled very professionally by your manuscript editing service. Thank you for thorough English language editing and checking in minute details."</p>
                    </div>
                </div>
            </div>
            
        </div>
      </Slider>
    </div>
  );
}