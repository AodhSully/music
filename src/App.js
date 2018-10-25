import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Head from './components/head';
import Footer from './components/footer';
import Contents from './components/pages/contents';



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Head />
          <Contents />
          <Footer />

        </header>
      </div>
    );
  }
}
