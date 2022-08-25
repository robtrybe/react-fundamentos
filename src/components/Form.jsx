import React from 'react';
import '../css/form.css';

const { Component } = React;

class Form extends Component{
    render(){
        return (
            <form action="" method="post" >
                <input type="text" name="userEmail" placeholder="Email"/>
                <input type="password" name="userPassword" placeholder="Senha"/>
                <div className="container-checkbox">
                <input type="checkbox" name="saveEmail" />Salvar Email
                </div>
                <button type="button">Entrar</button>
            </form>
        )
    }
} 

export default Form;