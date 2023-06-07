import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../assets/banner/img1.jpg"
import img2 from "../../../assets/banner/img2.jpg"
import img3 from "../../../assets/banner/img3.jpg"
import img4 from "../../../assets/banner/img4.jpg"
import img5 from "../../../assets/banner/img5.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel >
                <div >
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;