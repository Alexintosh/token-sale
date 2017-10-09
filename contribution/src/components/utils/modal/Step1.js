import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import * as formSelector            from '../../../selectors';
import { updateRegisterFormField,
         validateFields }           from '../../../actions/registrationActions';

class Step1 extends PureComponent{
    render(){
        return(
            <div className={this.props.step1 ? '' : 'hide' }>
                <p className="modal-p center-text">Register Below to Gain Early Access to Leverj Crowd Sale</p>
                <input  type="text"
                        name="contactFirstName"
                        id="contactFirstName"
                        value={this.props.contactFirstName}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="First Name *" />
                <div id="_contactFirstName" className={"warning-text" + (this.props.contactFirstNameCheck ? ' hidden' : '')}>Please enter your first name</div>

                <input  type="text"
                        name="contactLastName"
                        id="contactLastName"
                        value={this.props.contactLastName}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="Last Name *" />
                <div id="_contactLastName" className={"warning-text" + (this.props.contactLastNameCheck ? ' hidden' : '')}>Please enter your last name</div>

                <input  type="text"
                        name="contactEmail"
                        id="contactEmail"
                        value={this.props.contactEmail}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="Email *" />
                <div id="_contactEmail" className={"warning-text" + (this.props.contactEmailCheck ? ' hidden' : '')}>Please enter your email address</div>

                <input  type="text"
                        name="contactCountry"
                        id="contactCountry"
                        value={this.props.contactCountry}
                        onChange={this.props.updateRegisterFormField.bind(this)} 
                        placeholder="Country *" />
                <div id="_contactCountry" className={"warning-text" + (this.props.contactCountryCheck ? ' hidden' : '')}>Please enter where you are a resident</div>

                <label>
                    <input  type="checkbox" 
                            id="countryCheck"
                            onChange={() => this.props.updateRegisterFormCheckField("countryCheck",!this.props.countryCheck)}
                            value={this.props.countryCheck} />
                            <p>By checking this box, you agree that you are not a resident of the United States, China, Iran, North Korea, Sudan, Cuba, Seychelles, and Syria.</p>
                </label>
                <div id="_countryCheck" className={"warning-text" + (this.props.countryCheckValidation ? ' hidden' : '')}>You may only proceed if you agree that you are not a resident of the United States or China</div>


                <label>
                    <input  type="checkbox" 
                            id="termsCheck"
                            onChange={() => this.props.updateRegisterFormCheckField("termsCheck",!this.props.termsCheck)}
                            value={this.props.countryCheck} />
                            <p>By checking this box, you agree with these <a href="https://leverj.io/tc.html" target="_blank" rel="noopener noreferrer">terms and conditions.</a></p>
                </label>
                <div id="_termsCheck" className={"warning-text" + (this.props.termsCheckValidation ? ' hidden' : '')}>You may only proceed if you agree to the terms and conditions</div>
                <div className="pt-20 center-text">
                    <button onClick={(e) => {e.preventDefault(); this.props.validateFields()}} className="btn btn-register-sm">NEXT</button>
                </div>
            </div>
        )
    }
}
const structuredSelector = createStructuredSelector({
    step1: formSelector.selectStep1,
    contactFirstName: formSelector.selectContactFirstName,
    contactLastName: formSelector.selectContactLastName,
    contactEmail: formSelector.selectContactEmail,
    contactAddress: formSelector.selectContactAddress,
    contactCountry: formSelector.selectContactCountry,
    countryCheck: formSelector.selectCountryCheck,
    termsCheck: formSelector.selectTermsCheck,
    contactFirstNameCheck: formSelector.selectContactFirstNameCheck,
    contactLastNameCheck: formSelector.selectContactLastNameCheck,
    contactEmailCheck: formSelector.selectContactEmailCheck,
    contactAddressCheck: formSelector.selectContactAddressCheck,
    contactCountryCheck: formSelector.selectContactCountryCheck,
    countryCheckValidation: formSelector.selectCountryCheckValidation,
    termsCheckValidation: formSelector.selectTermsCheckValidation
})

const mapDispatchToProps = dispatch => {
   return {
     updateRegisterFormField: (e) => {
         dispatch(updateRegisterFormField(e.target.name, e.target.value))
     },
     updateRegisterFormCheckField: (name, value) => {
         dispatch(updateRegisterFormField(name, value))
     },
     validateFields: () => {
         dispatch(validateFields())
     }
   }       
}

export default connect(
    structuredSelector,
    mapDispatchToProps
)(Step1)