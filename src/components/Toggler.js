import React, { Component } from 'react';
import Toggle from 'react-toggle';

class Toggler extends Component{
    constructor(props){
        super(props)
        this.state = {baconIsReady : true}
    }

    handleBaconChange(){
        this.state.baconIsReady = !this.state.baconIsReady
        this.props.ModeChoosen(this.state.baconIsReady?"Automatic":"mannual")
    }

    render(){
        return(
            <div style={{backgroundColor:"#624CAB"}}>
                <label className="someText"><strong>Manuual</strong></label>
                    <label style={{margin:15}}>
                        <Toggle
                        defaultChecked={this.state.baconIsReady}
                        icons={{
                            checked: null,
                            unchecked: null,
                        }}
                        onChange={()=>{this.handleBaconChange()}} />
                    </label>
                <label className="someText"><strong>Automatic</strong></label>
            </div>
        );
    }
}

export default Toggler