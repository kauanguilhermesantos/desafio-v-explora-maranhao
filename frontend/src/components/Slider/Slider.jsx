import React from "react";
import './slider.css';
import CardSlider from "../CardSlider/CardSlider.jsx";
// import { MdOutlineArrowBackIosNew } from "react-icons/md";
// import { MdOutlineArrowForwardIos } from "react-icons/md";

import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/autoplay";
import Autoplay from "swiper";
import { useState, useEffect } from "react";


import api from "../../api.js";


register();

export function Slider() {
    // export class Slider extends React.Component {
    // render() {

    const [atrativos, setAtrativos] = useState([]);

    async function getAtrativos() {
        const atrativosFromApi = await api.get("/atrativos");
        // console.clear();
        // console.log(atrativosFromApi.data);
        setAtrativos(atrativosFromApi.data);
    }

    useEffect(() => {
        getAtrativos();
    }, [])


    console.clear();

    const cards = Array.from({ length: 7 }, (_, index) => (
        < CardSlider
            key={index}
            nome={atrativos[index].nome}
            tipo={atrativos[index].tipo}
            imagemSource={atrativos[index].imagemSource}
        />
    ));




    // const cards = atrativos.slice(0, 4).forEach((atrativo) => {
    //     <CardSlider />
    // });
    //
    // console.log(atrativos[1].nome)
    // console.log(cards)



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
    // }
}

