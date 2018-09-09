import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Timer extends Component {

  constructor(props){
    super(props);
    this.state = {
      // counter:Date.now()
      seconds:0,
      minutes:0
    }
    this.start = false;
    this.timeOver = false;
    this.totalTimeMinutes = 1;

    //audio to play alarm
    this.audio = new Audio();
    this.audio.src = "../sound.mp3"
    this.continousTimer();
  }

  resetTimer(){
    this.setState({
      seconds:0,
      minutes:0
    },()=>{
      this.timeOver = false;
      // console.log(this.state)
    })    
  }


  stopSound(){
    this.audio.pause();
  }

  increaseTimer(){
    if(this.timeOver == true){
      return;
    }
    var seconds = this.state.seconds + 1;
    var minutes = this.state.minutes;
    if(seconds == 60){
      minutes++;
      if(minutes == this.totalTimeMinutes){
        this.setState({
          seconds: 0,
          minutes: minutes
        },()=>{
          this.timeOver = true;
          NotificationManager.success("Excercise and Reset the Timer","Times Up",600000)
          this.audio.play();
          // console.log(this.state)
        })
      } else{
        this.setState({
          seconds: 0,
          minutes: minutes
        },()=>{
          // console.log(this.state)
        })
      }
    } else{
      this.setState({
        seconds: seconds
      },()=>{
        // console.log(this.state)
      })      
    }

  }

  continousTimer(){
    this.interval = setInterval(()=>this.increaseTimer(),1000)
  }

  render() {
    return (
      <div className="Timer">
        {this.timeOver &&
          <h2>
            The time is up
          </h2>
        }
        <h2>{this.state.minutes} : {this.state.seconds}</h2>
        <h5>minutes : seconds</h5>
        <Button color="danger" onClick = {() => {this.resetTimer()}}>Reset Timer</Button>
        
        <Button color="warning" onClick = {()=> {this.stopSound()}}>Stop Sound</Button>
        <NotificationContainer />
      </div>
    );
  }
}

 export default Timer;