import React, { PureComponent } from 'react';
import validator                from 'validator';

export default class Contact extends PureComponent {
    constructor(){
        super();
        this.state = {
            contactName: '',
            contactEmail: '',
            contactMessage: ''
        }
    }
    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    submitContact(name, email, message){
        if(validator.isAlphanumeric(name.replace(/ /g,''))){
            if(validator.isEmail(email)){
                if(validator.isAlphanumeric(message)){
                    alert("Thank you for contacting us")
                    console.log("should link to thank you page")
                }
            }
        }
    }
    render(){
        return(
            <section id="contact">
                <div className="about-card">
                    <h2><span>Contact</span></h2>
                    <form id="contactForm" onSubmit={(e)=>{e.preventDefault(); this.submitContact(this.state.contactName, this.state.contactEmail, this.state.contactMessage)}}>
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
                                name="contactMessage"
                                id="contactMessage"
                                value={this.state.contactMessage}
                                onChange={this.handleInputChange.bind(this)} 
                                placeholder="Message" />

                        <input type="submit" className="btn btn-color btn-submit" />
                    </form>
                </div>
            </section>
        )
    }
}