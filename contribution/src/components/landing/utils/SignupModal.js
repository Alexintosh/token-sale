import React, { PureComponent } from 'react';
import { Modal }                from 'react-bootstrap';

export default class SignupModal extends PureComponent{
    constructor(){
        super();
        this.state = {
            contactName: '',
            contactEmail: '',
            contactAddress: '',
            contactCountry: '',
            purchaseSize: ''
        }
    }
    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    submitContact(name, email, address, country, size){
        console.log(name + ": " + email + " : " + address + " : " + country + " : " + size)
    }
    render(){
        return(
            <Modal bsSize="medium" show={this.props.display} onHide={this.props.hide}>
                <Modal.Body className="center-text">
                        <p className="modal-p">Please fill the following information to submit interest in the HelloCoin sale.</p>
                        <form   id="contactFormRegister" 
                                onSubmit={(e)=>{
                                    e.preventDefault(); 
                                    this.submitContact( this.state.contactName, 
                                                        this.state.contactEmail, 
                                                        this.state.contactAddress, 
                                                        this.state.contactCountry, 
                                                        this.state.purchaseSize)
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
                                    placeholder="Address *" />
                            <input  type="text"
                                    name="purchaseSize"
                                    id="purchaseSize"
                                    value={this.state.purchaseSize}
                                    onChange={this.handleInputChange.bind(this)} 
                                    placeholder="Purchase Size [min $20,000] *" />

                            <input type="submit" value="Register" className="btn btn-color btn-submit" />
                        </form>
                </Modal.Body>
            </Modal>
        )
    }
}