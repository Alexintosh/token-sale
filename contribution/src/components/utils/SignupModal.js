import React, { Component }             from 'react';
import { connect }                      from 'react-redux';
import validator                        from 'validator';
import ReCAPTCHA                        from 'react-google-recaptcha';
import { Modal }                        from 'react-bootstrap';
import { createStructuredSelector }     from 'reselect';

import {    updateRecaptchaResponse,
            fetchCaptchaResponse }      from '../../actions/saleActions';
import {    userRegister }              from '../../logic/registrationLogic';
import {    resetRegistrationFormFields,
            updateRegisterFormField }   from '../../actions/registrationActions';

import * as formSelector                from '../../selectors'

class SignupModal extends Component{
    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.props.updateRegisterFormField(name, value);
    }
    onRecaptchaChange(value) {
        console.log("Captcha value:", value);
        var userResponse = value;
        this.props.updateRecaptchaResp(userResponse);
        this.props.fetchCaptchaResponse(userResponse, this.props.accessId, this.props.apiToken);
    }
    submitContact(name, email, address, country, amount, countryCheck, termsCheck){
        
        var validation = true;
        this.props.resetRegistrationFormFields()
        if(!this.props.recaptchaPassed){
            //TODO: show a message if recaptcha check failed
            validation = false;
        }
        if(!validator.isAlphanumeric(name.replace(/ /g,''))){
            this.setState({ contactNameCheck: false })
            validation = false;            
        }
        if(!validator.isEmail(email)){
            this.setState({ contactEmailCheck: false })
            validation = false;            
        }
        if(!validator.isAlphanumeric(country)){
            this.setState({ contactCountryCheck: false })
            validation = false;
        }
        if(!(validator.isAlphanumeric(address) && address.length === 42)){
            this.setState({ contactAddressCheck: false })
            validation = false;            
        }
        if(!(validator.isDecimal(amount) && amount >= 25 && amount <= 500)){
            this.setState({ purchaseSizeCheck: false })
            validation = false;
        }
        if(!countryCheck){
            this.setState({ countryCheckValidation: false })
            validation = false;
        }
        if(!termsCheck){
            this.setState({ termsCheckValidation: false })
            validation = false;
        }
        if(validation){
            userRegister(name, email, address, country, amount, countryCheck, this.props.accessId, this.props.apiToken, this.props.userResponse, (res)=>{
                if(res === 'success'){
                    this.props.history.push('/success');
                }else{
                    console.log("error error error");
                }
            })
        }
    }
    render(){
        return(
            <Modal show={this.props.display} onHide={this.props.hide}>
                <Modal.Body className="center-text">
                    <p className="modal-p center-text">Please fill out the following form to gain exclusive access to the Leverj pre-sale.</p>
                    <form   id="contactFormRegister" 
                            onSubmit={(e)=>{
                                e.preventDefault(); 
                                this.submitContact( this.props.contactName, 
                                                    this.props.contactEmail, 
                                                    this.props.contactAddress, 
                                                    this.props.contactCountry, 
                                                    this.props.purchaseSize,
                                                    this.props.countryCheck,
                                                    this.props.termsCheck)
                                }}>
                        <input  type="text"
                                name="contactName"
                                id="contactName"
                                value={this.props.contactName}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Name *" />
                        <div id="_contactName" className={"warning-text" + (this.props.contactNameCheck ? ' hidden' : '')}>Please enter your name</div>

                        <input  type="text"
                                name="contactEmail"
                                id="contactEmail"
                                value={this.props.contactEmail}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Email *" />
                        <div id="_contactEmail" className={"warning-text" + (this.props.contactEmailCheck ? ' hidden' : '')}>Please enter your email address</div>

                        <input  type="text"
                                name="contactCountry"
                                id="contactCountry"
                                value={this.props.contactCountry}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Country *" />
                        <div id="_contactCountry" className={"warning-text" + (this.props.contactCountryCheck ? ' hidden' : '')}>Please enter where you are a resident</div>

                        <input  type="text"
                                name="contactAddress"
                                id="contactAddress"
                                value={this.props.contactAddress}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Ethereum Address *" />
                        <div id="_contactAddress" className={"warning-text" + (this.props.contactAddressCheck ? ' hidden' : '')}>Please enter a valid ethereum address</div>

                        <input  type="text"
                                name="purchaseSize"
                                id="purchaseSize"
                                value={this.props.purchaseSize}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Purchase Size [min 25 Ether - max 500 Ether] *" />
                        <div id="_purchaseSize" className={"warning-text" + (this.props.purchaseSizeCheck ? ' hidden' : '')}>Please enter an amount between 25 Ether and 500 Ether</div>

                        <label>
                            <input  type="checkbox" 
                                    id="countryCheck"
                                    onChange={() => this.props.updateRegisterFormField("countryCheck",!this.props.countryCheck)}
                                    value={this.props.countryCheck} />
                                    <p>By checking this box, you agree that you are not a resident of the United States, China, Iran, North Korea, Sudan, Cuba, Seychelles, and Syria.</p>
                        </label>
                        <div id="_countryCheck" className={"warning-text" + (this.props.countryCheckValidation ? ' hidden' : '')}>You may only proceed if you agree that you are not a resident of the United States or China</div>


                        <label>
                            <input  type="checkbox" 
                                    id="termsCheck"
                                    onChange={() => this.props.updateRegisterFormField("termsCheck",!this.props.termsCheck)}
                                    value={this.props.countryCheck} />
                                    <p>By checking this box, you agree with these <a href="https://leverj.io/tc.html" target="_blank" rel="noopener noreferrer">terms and conditions.</a></p>
                        </label>
                        <div id="_termsCheck" className={"warning-text" + (this.props.termsCheckValidation ? ' hidden' : '')}>You may only proceed if you agree to the terms and conditions</div>

                        <ReCAPTCHA className="center-text" ref="recaptcha" sitekey="6LcUYDIUAAAAACW2oe-ShyAVAVhuJJ2efpFjWziG" onChange={this.onRecaptchaChange.bind(this)}/>

                        <div className="center-text">
                            <input type="submit" value="Register" className="btn btn-color btn-submit" />
                        </div>
                </form>
                </Modal.Body>
            </Modal>
        )
    }
}

const structuredSelector = createStructuredSelector({
    accessId: formSelector.selectAccessId,
    apiToken: formSelector.selectApiToken,
    userReponse: formSelector.selectRecaptchaUserReponse,
    recaptchaPassed: formSelector.selectCaptchaPassed,
    contactName: formSelector.selectContactName,
    contactEmail: formSelector.selectContactEmail,
    contactAddress: formSelector.selectContactAddress,
    contactCountry: formSelector.selectContactCountry,
    purchaseSize: formSelector.selectPurchaseSize,
    countryCheck: formSelector.selectCountryCheck,
    termsCheck: formSelector.selectTermsCheck,
    contactNameCheck: formSelector.selectContactNameCheck,
    contactEmailCheck: formSelector.selectContactEmailCheck,
    contactAddressCheck: formSelector.selectContactAddressCheck,
    contactCountryCheck: formSelector.selectContactCountryCheck,
    purchaseSizeCheck: formSelector.selectPurchaseSizeCheck,
    countryCheckValidation: formSelector.selectCountryCheckValidation,
    termsCheckValidation: formSelector.selectTermsCheckValidation
})

const mapDispatchToProps = dispatch => {
   return {
     updateRecaptchaResp: (userResponse) => {
        dispatch(updateRecaptchaResponse(userResponse));
     },
     fetchCaptchaResponse: (userResponse, accessID, apiToken) => {
         dispatch(fetchCaptchaResponse(userResponse, accessID, apiToken))
     },
     updateRegisterFormField: (name, value) => {
         dispatch(updateRegisterFormField(name, value))
     },
     resetRegistrationFormFields: () => {
         dispatch(resetRegistrationFormFields())
     }
   }       
}

export default connect(
    structuredSelector,
    mapDispatchToProps
)(SignupModal)
