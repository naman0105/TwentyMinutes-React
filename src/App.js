import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';
import Header from './components/Header';
import Footer from './components/Footer';
import CarouselDisplay from './components/Carousel';
import About from './components/About'
import TimerAutomatic from './components/TimerAutomatic'
import Toggler from './components/Toggler'
import HowToUse from './components/HowToUse'
import { Carousel } from 'reactstrap';

class App extends Component {
	constructor(){
		super()
		this.state ={
			mode : this.changeMode,
			modeResult : "Automatic"
		}
		
		this.changeMode = this.changeMode.bind(this)
	}

	changeMode(result){
		console.log(result)
		this.setState({
			modeResult : result
		},()=>{
			console.log("result")
		})
	}

  render() {
		var timer;
		if(this.state.modeResult == "mannual"){
			timer = <Timer counter={Date.now()}></Timer>
		} else{
			timer =	<TimerAutomatic></TimerAutomatic>
		}
    return (
	<div className="App">
		<Header></Header>
		<CarouselDisplay></CarouselDisplay>
		<HowToUse></HowToUse>
		<Toggler ModeChoosen={this.changeMode}></Toggler>
		{timer}
		<About></About>
		<Footer></Footer>
	</div>
    );
  }
}

 export default App;