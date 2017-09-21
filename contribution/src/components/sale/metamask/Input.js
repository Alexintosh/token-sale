import React, { Component } from 'react';
import { connect }          from 'react-redux';
import ContributionForm     from './ContributionForm';

class Input extends Component {
    render(){
        return(
            <section id="input-container">
                {
                        this.props.userRegistered 
                    ?
                        <div className="row">
                            <div className="col-md-6">
                                <ContributionForm />
                            </div>
                        </div>
                    :
                        <div>
                            <p>You need to have pre-registered to contribute during this stage</p>
                        </div>
                }
            </section>
        )
    }
}
const mapStateToProps = state => {
    return {
        userRegistered: state.sale.userRegistered
    }
}
export default connect(
    mapStateToProps
)(Input);
