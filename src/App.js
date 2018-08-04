import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import
import Form from './Components/Form';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
