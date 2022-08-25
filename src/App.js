import React from 'react';
import Form from './components/Form';
import './css/boot.css';

const { Component } = React;

class App extends Component {
  render() {
    return (
      <div className="container-form">
        <h1>Formulário de Login</h1>
        <Form />
      </div>
    )
  }

}

export default App;
