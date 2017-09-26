import React, { PureComponent } from 'react';
import SignupModal              from '../landing/utils/SignupModal';

export default class PreSale extends PureComponent { 
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
                <h4>Register to contribute to the {this.props.name} sale</h4>
                <button onClick={()=> this.displayModal()} className="btn btn-color btn-full">Register</button>
                <div className="row pv-20">
                    <div className="col-md-6 col-sm-12">
                        <a href="#contribute" className="btn btn-white btn-full-1">How to contribute?</a>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <button onClick={() => this.props.getShare()} className="btn btn-white btn-full-1">Share</button>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </section>
        )
    }
}