import React, { Component } from 'react';
import { connect }          from 'react-redux';
import * as sale            from '../../../actions/saleLogic';

class UserForm extends Component{
    handleCheckChange(e){
        const val = !this.state.agreement;
        this.setState({
            agreement: val
        })
    }
    render(){
        return(
            <section id="user-form">
                 <form id="userFormRegister" onSubmit={(e)=> {e.preventDefault(); this.props.userSubmit(this.props.userName, this.props.userEmail, this.props.userCountry, this.props.termsConditions)}}>
                    <input  type="text"
                            name="userName"
                            id="userName"
                            value={this.props.userName}
                            onChange={this.props.handleInputChange.bind(this)} 
                            placeholder="Name *" />
                    <input  type="text"
                            name="userEmail"
                            id="userEmail"
                            value={this.props.userEmail}
                            onChange={this.props.handleInputChange.bind(this)} 
                            placeholder="Email *" />
                    <input  type="text"
                            name="userCountry"
                            id="userCountry"
                            value={this.props.userCountry}
                            onChange={this.props.handleInputChange.bind(this)} 
                            placeholder="Country *" />
                    <label>
                        <input  type="checkbox" 
                                name="termsConditions"
                                id="termsConditions"
                                onChange={() => this.props.handleCheckChange(!this.props.termsConditions)}
                                value={this.props.termsConditions} />
                                By checking this box, you agree to the Terms and Conditions below. 
                    </label>
                    <div>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                    </div>
                    <div>
                        <input type="submit" value="Register" className="btn btn-color" />
                    </div>
                </form>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        userName: state.sale.userName,
        userEmail: state.sale.userEmail,
        userCountry: state.sale.userCountry,
        termsConditions: state.sale.termsConditions
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleInputChange: (e) => {
            dispatch(sale.handleUserInputChange(e.target.name,e.target.value))
        },
        handleCheckChange: (val) => {
            dispatch(sale.handleUserCheckChange(val))
        },
        userSubmit: (name, email, country, terms) => {
            dispatch(sale.handleUserInformationSubmission(name, email, country, terms));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserForm)