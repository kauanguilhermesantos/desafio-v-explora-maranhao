import React from "react";
import "./cardSobre.css";

export class CardSobre extends React.Component {
    render() {
        
    const {titulo, texto, imagem, index} = this.props;

    // const ehPar = index % 2 === 0;

        return (
            <main>
                {/* <div className="{`textoSobre ${ehPar ? 'par' : 'impar'}`}"> */}
                <div className="textoSobre">
                    <div className="chamadaSobre">
                        <div>
                            <h3>{titulo}</h3>
                            <p dangerouslySetInnerHTML={{ __html: texto }}></p>
                        </div>
                        {imagem && <img src={imagem} alt="" />}
                    </div>
                </div>
            </main>
        )
    }
}