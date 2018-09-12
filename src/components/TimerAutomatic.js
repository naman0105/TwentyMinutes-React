import React, { Component } from 'react';
import { Button, Jumbotron, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import './style.css'

class TimerAutomatic extends Component{
    constructor(){
        super();
        this.state = {
            seconds:0,
            minutes:0
        }
        this.audio = new Audio();
        this.audio.src = '../beep.mp3'
        this.totalSeconds = 20;
        this.totalMinutes = 1;
        this.excercise = false;
        this.started = false;
    }

    increaseTime(){
        if(this.state.seconds == 59){
            this.state.minutes = this.state.minutes + 1;
            this.state.seconds = 0;
        } else{
            this.state.seconds = this.state.seconds + 1;
        }
    }

    increaseTimer(){
        this.increaseTime()
        if(this.excercise == false){
            if(this.state.minutes == this.totalMinutes){
                this.setState({
                    seconds:0,
                    minutes:0
                },()=>{
                    this.audio.play();
                    this.excercise = true;
                })
            } else{
                this.setState({
                    seconds:this.state.seconds,
                    minutes:this.state.minutes
                },()=>{

                })                
            }
        } else{
            if(this.state.seconds == this.totalSeconds){
                this.setState({
                    seconds:0,
                    minutes:0
                },()=>{
                    this.audio.play();
                    this.excercise = false;
                })
            } else{
                this.setState({
                    seconds:this.state.seconds,
                    minutes:this.state.minutes
                },()=>{

                })                
            }
        }
    }

    startTimer(){
        this.started = true;
        this.interval = setInterval(()=>{this.increaseTimer()},1000)
    }

    stopTimer(){
        this.started = false;
        this.setState({
            seconds:0,
            minutes:0
        },()=>{
            clearInterval(this.interval)
        })
    }

    render(){
        var mainLogic
        if(this.started){
            mainLogic = (
                <div>
                    <h2>{this.state.minutes.toString().length == 1?"0":""}{this.state.minutes} : {this.state.seconds.toString().length == 1?"0":""}{this.state.seconds}</h2>
                    <h5>minutes : seconds</h5>
                    <Button color="warning" onClick = {()=> {this.stopTimer()}}>Stop Timer</Button>

                </div>                
            )
        } else{
            mainLogic = (
                <div>
                   <Button color="success" onClick = {()=> {this.startTimer()}}>Start Timer</Button>
                </div>
            )
        }
        return(
            <div>
                <Jumbotron style={{backgroundColor:"#7189FF",margin:0}}>
                    {mainLogic}
                </Jumbotron>
            </div>
        );
    }
}

export default TimerAutomatic