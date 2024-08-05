import React from 'react';
import './banner.css';

export class Banner extends React.Component {
    render() {
        const {mensagem, backgroundImage} = this.props;

        const bannerCss = {
            backgroundImage: `url(${backgroundImage})`,
        }

        return (
            <section className="banner" style={bannerCss}>
                <h1>{mensagem}</h1>
            </section>
        )
    }
}
