import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
	<div className="App">
		<Header></Header>
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
		</header>
		<Timer counter={Date.now()}></Timer>
		<Footer></Footer>
	</div>
    );
  }
}

 export default App;