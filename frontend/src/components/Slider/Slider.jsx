import React from "react";
import './slider.css';
import { CardHome } from "../CardHome/CardHome";

export class Slider extends React.Component {
    render() {
        return (
            <div class="slider-container">

                <div class="slider-container-up">

                    <div class="botoesDestinosMaisProcurado">
                        <button id="anterior"> L </button>
                    </div>

                    <div class="slider-wrapper">
                        <div class="slider">
                        
                            <CardHome/>
                            <CardHome/>
                            <CardHome/>

                        </div>
                    </div>

                    <div class="botoesDestinosMaisProcurado">
                        <button id="proximo"> R </button>
                    </div>

                </div>


            <ul class="pontinhosDestinosMaisProcurado">
                <li class="ativo" data-index="0">•</li>
                <li data-index="1">•</li>
                <li data-index="2">•</li>
                <li data-index="3">•</li>
            </ul>
            <script src="./slide.js"></script> 
        </div>

        )
    }
    
}

