import React, { PureComponent } from 'react';
import { Modal }                from 'react-bootstrap';
import validator                from 'validator';
import { userRegister }         from '../../../actions/saleLogic';

export default class SignupModal extends PureComponent{
    constructor(){
        super();
        this.state = {
            contactName: '',
            contactEmail: '',
            contactAddress: '',
            contactCountry: '',
            purchaseSize: '',
            countryCheck: false,
            termsCheck: false,
            contactNameCheck: true,
            contactEmailCheck: true,
            contactAddressCheck: true,
            contactCountryCheck: true,
            purchaseSizeCheck: true,
            countryCheckValidation: true,
            termsCheckValidation:true
        }
    }
    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleCheckChange(name, val){
        this.setState({
            [name]: val
        })
    }
    reset(){
        this.setState({
            contactNameCheck: true,
            contactEmailCheck: true,
            contactAddressCheck: true,
            contactCountryCheck: true,
            purchaseSizeCheck: true,
            countryCheckValidation: true,
            termsCheckValidation: true
        })
    }
    submitContact(name, email, address, country, amount, countryCheck, termsCheck){
        var validation = true;
        this.reset();
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
        if(!(validator.isCurrency(amount) && amount >= 25 && amount <= 500)){
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
            userRegister(name, email, address, country, amount, countryCheck, (res)=>{
                this.props.history.push('/success');
            })
        }
    }
    render(){
        return(
            <Modal show={this.props.display} onHide={this.props.hide}>
                <Modal.Body className="center-text">
                    <p className="modal-p center-text">Please fill out the following form to gain exclusive access to the LEVERJ pre-sale.</p>
                    <form   id="contactFormRegister" 
                            onSubmit={(e)=>{
                                e.preventDefault(); 
                                this.submitContact( this.state.contactName, 
                                                    this.state.contactEmail, 
                                                    this.state.contactAddress, 
                                                    this.state.contactCountry, 
                                                    this.state.purchaseSize,
                                                    this.state.countryCheck,
                                                    this.state.termsCheck)
                                }}>
                        <input  type="text"
                                name="contactName"
                                id="contactName"
                                value={this.state.contactName}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Name *" />
                        <div id="_contactName" className={"warning-text" + (this.state.contactNameCheck ? ' hidden' : '')}>Please enter your name</div>

                        <input  type="text"
                                name="contactEmail"
                                id="contactEmail"
                                value={this.state.contactEmail}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Email *" />
                        <div id="_contactEmail" className={"warning-text" + (this.state.contactEmailCheck ? ' hidden' : '')}>Please enter your email address</div>

                        <input  type="text"
                                name="contactCountry"
                                id="contactCountry"
                                value={this.state.contactCountry}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Country *" />
                        <div id="_contactCountry" className={"warning-text" + (this.state.contactCountryCheck ? ' hidden' : '')}>Please enter where you are a resident</div>

                        <input  type="text"
                                name="contactAddress"
                                id="contactAddress"
                                value={this.state.contactAddress}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Ethereum Address *" />
                        <div id="_contactAddress" className={"warning-text" + (this.state.contactAddressCheck ? ' hidden' : '')}>Please enter a valid ethereum address</div>

                        <input  type="text"
                                name="purchaseSize"
                                id="purchaseSize"
                                value={this.state.purchaseSize}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Purchase Size [min 25 ETH - max 500 ETH] *" />
                        <div id="_purchaseSize" className={"warning-text" + (this.state.purchaseSizeCheck ? ' hidden' : '')}>Please enter an amount between 25ETH and 500ETH</div>

                        <label>
                            <input  type="checkbox" 
                                    name="countryCheck"
                                    id="countryCheck"
                                    onChange={() => this.handleCheckChange("countryCheck",!this.state.countryCheck)}
                                    value={this.state.countryCheck} />
                                    <p>By checking this box, you agree that you are not a resident of the United States or China.</p>
                        </label>
                        <div id="_countryCheck" className={"warning-text" + (this.state.countryCheckValidation ? ' hidden' : '')}>You may only proceed if you agree that you are not a resident of the United States or Chine</div>


                        <label>
                            <input  type="checkbox" 
                                    name="termsCheck"
                                    id="termsCheck"
                                    onChange={() => this.handleCheckChange("termsCheck",!this.state.termsCheck)}
                                    value={this.state.countryCheck} />
                                    <p>By checking this box, you agree with these <a href="https://leverj.io/tc.html" target="_blank" rel="noopener noreferrer">terms and conditions.</a></p>
                        </label>
                        <div id="_termsCheck" className={"warning-text" + (this.state.termsCheckValidation ? ' hidden' : '')}>You may only proceed if you agree to the terms and conditions</div>

                        <div className="center-text">
                            <input type="submit" value="Register" className="btn btn-color btn-submit" />
                        </div>
                </form>
                </Modal.Body>
            </Modal>
        )
    }
}