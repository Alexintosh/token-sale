import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectContactEmailName }   from '../../selectors';

import {    submitEmailForm,
            updateRegisterFormField } from '../../actions/registrationActions';


class Countdown extends Component {
    render(){
        return(
            <section id="countdown">
                <div className="about-card-contact center-text">
                    <h3>Presale starts on:</h3>
                    <p>October 12 -> 14, 2017</p>
                    <form id="countdownForm" onSubmit={(e)=>{e.preventDefault(); this.props.submitEmail(this.props.history)}}>
                        <input  type="text"
                                name="contactEmailName"
                                id="contactEmailName"
                                value={this.props.contactEmailName}
                                onChange={this.props.updateRegisterFormField.bind(this)} 
                                placeholder="Send me email updates" />
                        <input type="submit" className="btn btn-color btn-submit" value="Send" />
                    </form>
                </div>
            </section>
        )
    }
}
const structuredSelector = createStructuredSelector({
    contactEmailName: selectContactEmailName
})
const mapDispatchToProps = dispatch => {
    return {
        updateRegisterFormField: (e) => {
            dispatch(updateRegisterFormField(e.target.name, e.target.value));
        },
        submitEmail: (history) => {
            dispatch(submitEmailForm(history))
        }
    }
}
export default connect (structuredSelector, mapDispatchToProps)(Countdown)