import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Content from './components/content';


class App extends React.Component {
  
  
    render() {
        return ( 
            <div class="container">
            <Header/>
            <Content/>
              </div>
        );
    }
}

export default App;