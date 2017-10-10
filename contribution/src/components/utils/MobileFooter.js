import React, { PureComponent } from 'react';
import SignupModal              from './SignupModal';

export default class MobileFooter extends PureComponent{
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
        return(
            <div className="mobile-footer">
                <div className="center-text">
                    <button onClick={()=> this.displayModal()} className="btn btn-footer">REGISTER</button>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </div>
        )
    }
}