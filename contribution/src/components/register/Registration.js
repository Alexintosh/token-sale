import React, { Component }     from 'react';
import { withRouter }           from 'react-router-dom';
import validator                from 'validator';
import { userRegister }         from '../../actions/saleLogic';

class Registration extends Component {
    constructor(){
        super();
        this.state = {
            contactName: '',
            contactEmail: '',
            contactAddress: '',
            contactCountry: '',
            purchaseSize: '',
            countryCheck: false
        }
    }
    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleCheckChange(val){
        this.setState({
            countryCheck: val
        })
    }
    submitContact(name, email, address, country, amount, countryCheck){
        if(countryCheck){
            if(validator.isAlphanumeric(name.replace(/ /g,''))){
                if(validator.isEmail(email)){
                    if(validator.isAlphanumeric(address) && address.length === 42){
                        if(validator.isAlphanumeric(country)){
                            if(validator.isCurrency(amount) && amount >= 25 && amount <= 500){
                                userRegister(name, email, address, country, amount, countryCheck, (res)=>{
                                    this.props.history.push('/success');
                                })
                            }
                        }
                    }
                }
            }
        }
    }
    render(){
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <p className="modal-p center-text">Please fill the following form to submit interest in the LEVERJ sale.</p>
                            <form   id="contactFormRegister" 
                                    onSubmit={(e)=>{
                                        e.preventDefault(); 
                                        this.submitContact( this.state.contactName, 
                                                            this.state.contactEmail, 
                                                            this.state.contactAddress, 
                                                            this.state.contactCountry, 
                                                            this.state.purchaseSize,
                                                            this.state.countryCheck)
                                        }}>
                                <input  type="text"
                                        name="contactName"
                                        id="contactName"
                                        value={this.state.contactName}
                                        onChange={this.handleInputChange.bind(this)} 
                                        placeholder="Name *" />
                                <input  type="text"
                                        name="contactEmail"
                                        id="contactEmail"
                                        value={this.state.contactEmail}
                                        onChange={this.handleInputChange.bind(this)} 
                                        placeholder="Email *" />
                                <label>
                                    <input  type="checkbox" 
                                            name="countryCheck"
                                            id="countryCheck"
                                            onChange={() => this.handleCheckChange(!this.state.countryCheck)}
                                            value={this.state.countryCheck} />
                                            <p>By checking this box, you agree that you are not a resident of the United States or China.</p>
                                </label>
                                <input  type="text"
                                        name="contactCountry"
                                        id="contactCountry"
                                        value={this.state.contactCountry}
                                        onChange={this.handleInputChange.bind(this)} 
                                        placeholder="Country *" />
                                <input  type="text"
                                        name="contactAddress"
                                        id="contactAddress"
                                        value={this.state.contactAddress}
                                        onChange={this.handleInputChange.bind(this)} 
                                        placeholder="Ethereum Address *" />
                                <input  type="text"
                                        name="purchaseSize"
                                        id="purchaseSize"
                                        value={this.state.purchaseSize}
                                        onChange={this.handleInputChange.bind(this)} 
                                        placeholder="Purchase Size [min 25 ETH - max 500 ETH] *" />
                                <div className="center-text">
                                    <input type="submit" value="Register" className="btn btn-color btn-submit" />
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Registration);