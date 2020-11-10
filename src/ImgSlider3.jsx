import React, {useState} from 'react';
import 'swiper/swiper-bundle.css'
import Swiper from 'react-id-swiper';
import './ImgSlider.css';

import Ex01 from './SVG/Ex01.jpg';
import Ex02 from './SVG/Ex02.jpg';
import Ex03 from './SVG/Ex03.jpg';
import Ex04 from './SVG/Ex04.jpg';
import Ex05 from './SVG/Ex05.jpg';
import Ex06 from './SVG/Ex06.jpg';
import Ex07 from './SVG/Ex07.jpg';
import Ex08 from './SVG/Ex08.jpg';
import Ex09 from './SVG/Ex09.jpg';

const ImgSliderConfigs = {
    contaimerClass:"swiper-contaimer img-slider",
    parallax:true,
    centeredSlides:true,
    speed:500,
    spaceBetween:0,
    effect:'slide'
};

const ImgSlider2 =() =>{
    const [parallaxSwiper,setParallaxSwiper] = useState(null);
    const parallaxAmount = parallaxSwiper ? parallaxSwiper.width * 0.95 : 0;
    const parallaxOpacity = 0.5;

     return <Swiper {...ImgSliderConfigs} getSwiper={setParallaxSwiper}>
        <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex01} alt="img01"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex02} alt="img02"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex03} alt="img03"/>
             </div>
       </div>

       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex04} alt="img04"/>
             </div>
       </div>

       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex05} alt="img05"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex06} alt="img06"/>
             </div>
         </div>
         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex07} alt="img07"/>
             </div>
         </div>

         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex08} alt="img08"/>
             </div>
         </div>

         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Ex09} alt="img09"/>
             </div>
         </div>
         
    </Swiper>;
};

export default ImgSlider2;