import React from 'react';
import '../css/form.css';

const { Component } = React;

class Form extends Component{

    render(){
        
        return (
            <form action="" method="post" >
                <input
                type="text"
                name="userName"
                placeholder="Nome"
                value=""
                />
                <input
                type="text"
                name="userEmail"
                placeholder="Email"
                value="" />
                <div className="container-checkbox">
                <input type="checkbox" name="saveEmail" />Salvar Email
                </div>
                <button type="button">Guardar</button>
            </form>
        )
    }
} 

export default Form;