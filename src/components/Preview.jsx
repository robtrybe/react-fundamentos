import React from 'react';
import '../css/preview.css';

const { Component } = React;

class Preview extends Component{
    render(){
        return (
            <article className="preview-container">
                <h2>Dados Informados</h2>
                {/* Eamil */}
                <div>Robson</div>
                {/* Salvar email */}
                <div>rob@hotmail.com</div>
            </article>
        );
    }
}

export default Preview;