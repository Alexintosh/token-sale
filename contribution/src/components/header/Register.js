import React, { Component } from 'react';
import SignupModal          from '../utils/SignupModal';

export default class PreSale extends Component { 
    constructor(){
        super();
        this.state={
            display: false
        }
    }
    displayModal() {
        this.setState({
            display: true
        });
    }
    hideModal() {
        this.setState({
            display: false
        });
    }   
    render(){
        return (
            <section id="pre-sale">
                <h3 className="center-text mt-0">Register to contribute to the Leverj Presale</h3>
                <button onClick={()=> this.displayModal()} className="btn btn-color btn-full">Register</button>
                <div className="row pv-20">
                    <div className="col-md-6 col-sm-12">
                        <a href="#contribute" className="btn btn-white btn-full-1">How to contribute?</a>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <a href="https://twitter.com/Leverj_io" target="_blank" rel="noopener noreferrer" className="btn btn-white btn-full-1">Share</a>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </section>
        )
    }
}