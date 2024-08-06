import React from "react";
import './slider.css';
import Card from "../Card/Card";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import { MdOutlineArrowForwardIos } from "react-icons/md";

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import  Autoplay  from "swiper";

register();

export class Slider extends React.Component {
    render() {

        const cards = Array.from({ length: 7 }, (_, index) => (
            <Card key={index} />
        ));
    
        return (
            <div className="slider">
                <Swiper
                    className="styleSlider"
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={Autoplay}
                >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className="cardSlider">
                                    {card}
                                </div>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        );
    }
    
}

