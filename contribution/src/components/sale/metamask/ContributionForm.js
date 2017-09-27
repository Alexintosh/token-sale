import React, { Component }     from 'react';
import { connect }                  from 'react-redux';
import { handleUserInputChange }    from '../../../actions/saleLogic';

class ContributionForm extends Component{
    contributeForm(){
        alert("thanks for contributing")
    }
    render(){
        return(            
            <section id="contribution-form">
                <form id="userFormRegister" onSubmit={(e)=>{e.preventDefault(); this.contributeForm()}}>
                    <input  type="text"
                            name="userContribution"
                            id="userContribution"
                            value={this.props.userContribution}
                            onChange={this.props.handleInputChange.bind(this)} 
                            placeholder="Amount *" />
                    <p className="input-label">Ether</p>
                    <input type="submit" value="Contribute" className="btn btn-color mt-0" />
                </form>
            </section>
        )
    }
}
const mapStateToProps = state => {
    return{
        userContribution: state.sale.userContribution
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleInputChange: (e) => {
            dispatch(handleUserInputChange(e.target.name,e.target.value))
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContributionForm);