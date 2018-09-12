import React, { Component } from 'react';
import { Button, Jumbotron, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './style.css'

class Timer extends Component {

  constructor(props){
    super(props);
    this.state = {
      // counter:Date.now()
      seconds:0,
      minutes:0
    }
    this.started = false;
    this.timeOver = false;
    this.totalTimeMinutes = 20;
    this.totalTimeSeconds = 20;
    this.exercise = false;

    //audio to play alarm
    this.audio = new Audio();
    this.audio.src = "../sound.mp3"
  }

  resetTimer(){
    this.setState({
      seconds:0,
      minutes:0
    },()=>{
      this.timeOver = false;
      this.exercise = false;
      // console.log(this.state)
    })    
  }

  startExercise(){
    this.exercise = true;
    this.timeOver = false;
    this.setState({
      seconds:0,
      minutes:0
    },()=>{
      this.stopSound();
      clearInterval(this.interval)
      this.continousTimer();
    })  
  }

  startTimer(){
    this.started = true;
    this.continousTimer();
  }

  stopTimer(){
    this.started = false;
    this.timeOver = false;
    this.setState({
      seconds:0,
      minutes:0
    },()=>{
      this.stopSound();
      this.exercise = false;
      clearInterval(this.interval)
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
    // console.log(this.exercise," ", seconds," ",this.totalTimeSeconds,"", (seconds === this.state.totalTimeSeconds))
    if(this.exercise && (seconds == this.totalTimeSeconds)){
      this.timeOver = true;
      this.setState({
        seconds: seconds,
        minutes: minutes
      },()=>{
        NotificationManager.success("Press reset timer to continue","You can start working",600000)
        this.audio.play();
        this.exercise = false;
        // console.log(this.state)
      })
    } else
    if(seconds == 60){
      minutes++;
      if(minutes == this.totalTimeMinutes){
        this.timeOver = true;
        this.setState({
          seconds: 0,
          minutes: minutes
        },()=>{
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
    var mainLogic;
    if(this.started){
      mainLogic = (
        <div>
          <h2>{this.state.minutes.toString().length == 1?"0":""}{this.state.minutes} : {this.state.seconds.toString().length == 1?"0":""}{this.state.seconds}</h2>
          <h5>minutes : seconds</h5>
          <Button color="danger" onClick = {() => {this.resetTimer()}}>Reset Timer</Button>
          <Button color="warning" onClick = {()=> {this.stopSound()}}>Stop Sound</Button>
          <Button color="warning" onClick = {()=> {this.stopTimer()}}>Stop Timer</Button>
          <Button color="danger" disabled = {!this.timeOver} onClick = {() => {this.startExercise()}}>Start Excercise</Button>
        </div>
      );
    } else{
      mainLogic = (
        <div>
          <Button color="success" onClick = {()=> {this.startTimer()}}>Start Timer</Button>
        </div>
      )
    }
    return (
      <div className="Timer">
        {this.timeOver &&
          (<Jumbotron fluid style={{margin:0, backgroundColor:"#624CAB", color:"white"}}>
          <h3 className="display-4">The time is up</h3>
          </Jumbotron>)
        }
        <Jumbotron style={{backgroundColor:"#7189FF",margin:0}}>
          {mainLogic}
        </Jumbotron>
        <NotificationContainer />
      </div>
    );
  }
}

 export default Timer;