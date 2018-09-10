import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import Header from './components/Header';
import Footer from './components/Footer';
import CarouselDisplay from './components/Carousel';
import About from './components/About'
import { Carousel } from 'reactstrap';

class App extends Component {
  render() {
    return (
	<div className="App">
		<Header></Header>
		<CarouselDisplay></CarouselDisplay>
		<Timer counter={Date.now()}></Timer>
		<About></About>
		<Footer></Footer>
	</div>
    );
  }
}

 export default App;