import React from 'react';
import './banner.css';

export class Banner extends React.Component {
    render() {
        const {mensagem} = this.props;

        return (
            <section class="banner">
                <h1>{mensagem}</h1>
            </section>
        )
    }
}
