import React, {useState} from 'react';
import 'swiper/swiper-bundle.css'
import Swiper from 'react-id-swiper';
import './ImgSlider.css';

import Take01 from './SVG/Take01.jpg';
import Take02 from './SVG/Take02.jpg';
import Take03 from './SVG/Take03.jpg';
import Take04 from './SVG/Take04.jpg';
import Take05 from './SVG/Take05.jpg';
import Take06 from './SVG/Take06.jpg';
import Take07 from './SVG/Take07.jpg';
import Take08 from './SVG/Take08.jpg';
import Take09 from './SVG/Take09.jpg';

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
                 <img src={Take01} alt="img01"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Take02} alt="img02"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Take03} alt="img03"/>
             </div>
       </div>

       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Take04} alt="img04"/>
             </div>
       </div>

       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Take05} alt="img05"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Take06} alt="img06"/>
             </div>
         </div>
         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Take07} alt="img07"/>
             </div>
         </div>

         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Take08} alt="img08"/>
             </div>
         </div>

         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Take09} alt="img09"/>
             </div>
         </div>
         
    </Swiper>;
};

export default ImgSlider2;