import React, { Component } from 'react';
import MetaMask                 from './MetaMask';
import Hardware                 from './Hardware';

export default class StepContainer extends Component{
    constructor(){
        super();
        this.state={
            browser: true
        }
    }
    onSelect(key){
        this.setState({
            browser: key
        })
    }
    render(){
        return(
            <section id="contribute-step">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <button id="metamask" 
                                    className={"btn btn-selector" + (this.state.browser ? " active": "")} 
                                    onClick={()=>this.onSelect(true)}>
                                        MetaMask
                            </button>
                        </div>
                        <div className="col-sm-6">
                            <button id="hardware" 
                                    className={"btn btn-selector"+ (this.state.browser ? "": " active")} 
                                    onClick={()=>this.onSelect(false)}>
                                        Hardware Wallet
                            </button>
                        </div>
                    </div>
                </div>
                {
                        this.state.browser
                    ?
                        <MetaMask />
                    :
                        <Hardware />
                }
            </section>
        )
    }
}