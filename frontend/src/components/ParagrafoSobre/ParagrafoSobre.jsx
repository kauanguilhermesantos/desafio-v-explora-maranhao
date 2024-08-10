import React from "react";
import "./paragrafoSobre.css";

export class ParagrafoSobre extends React.Component {
    render() {

        const { titulo, texto } = this.props;

        return (
            <div class="paragrafoSobre">
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
        )
    }
} 