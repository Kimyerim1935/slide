import React, {useState} from 'react';
import 'swiper/swiper-bundle.css'
import Swiper from 'react-id-swiper';
import './ImgSlider.css';

import Eat01 from './SVG/Eat01.jpg';
import Eat02 from './SVG/Eat02.jpg';
import Eat03 from './SVG/Eat03.jpg';
import Eat04 from './SVG/Eat04.jpg';
import Eat05 from './SVG/Eat05.jpg';
import Eat06 from './SVG/Eat06.jpg';
import Eat07 from './SVG/Eat07.jpg';
import Eat08 from './SVG/Eat08.jpg';
import Eat09 from './SVG/Eat09.jpg';

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
                 <img src={Eat01} alt="img01"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Eat02} alt="img02"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Eat03} alt="img03"/>
             </div>
       </div>

       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Eat04} alt="img04"/>
             </div>
       </div>

       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Eat05} alt="img05"/>
             </div>
       </div>
       <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Eat06} alt="img06"/>
             </div>
         </div>
         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Eat07} alt="img07"/>
             </div>
         </div>

         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Eat08} alt="img08"/>
             </div>
         </div>

         <div className="img-slide">
            <div
             className="slide-image"
             data-swiper-parallax={parallaxAmount}
             data-swiper-parallax-opacity={parallaxOpacity}
             >
                 <img src={Eat09} alt="img09"/>
             </div>
         </div>
         
    </Swiper>;
};

export default ImgSlider2;