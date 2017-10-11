import React, { Component }     from 'react';
import SignupModal              from '../utils/SignupModal';
import TimerSmall               from './TopBar/TimerSmall';

export default class TopBar extends Component{
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
            <section id="topbar" className={(this.props.stuck ? 'topbar-stuck' : 'topbar-top')}>
                <div className="nav-header-stuck">LEVER<span className="color-text">J</span></div>
                <div className="pull-right">
                    <TimerSmall />
                    <div className="topbar-register pull-right">
                        <div onClick={()=> this.displayModal()} className="btn btn-register-sm">REGISTER</div>
                    </div>
                </div>
                <SignupModal display={ this.state.display } hide={() => this.hideModal()}  history={this.props.history} />
            </section>
        )
    }
}