import React, { PureComponent }     from 'react';
import { connect }                  from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStep3,
         selectPurchaseSize,
         selectPurchaseSizeCheck,
         selectSubmission }         from '../../../selectors';
import { updateRegisterFormField }  from '../../../actions/registrationActions';
import { updateRecaptchaResponse,
         fetchCaptchaResponse,
         setRecaptchaPassed }       from '../../../actions/saleActions';
import ReactGA                      from 'react-ga';
ReactGA.initialize('UA-91770964-1');

class Step3 extends PureComponent{
    componentDidMount(){
      ReactGA.ga('send', 'pageview', '/register-step3');
    }
    render(){
        return(
            <div className={this.props.step3 ? '' : 'hide'}>
                <p className="modal-p center-text">Enter Contribution Amount</p>
                <div className="modal-info-background">
                    <p className="large">250M</p>
                    <span>Total LEV Tokens For Sale</span>
                    <p className="large">3,000 TOKENS/ 1 ETH</p>
                    <span>Conversion Ratio</span>
                </div>
                <div className="row">
                    <div className="col-sm-3 pr-0">
                        <div className="inline-amount">
                            <p>1 ETH</p>
                            <span>minimum</span>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <input  type="text"
                                name="purchaseSize"
                                id="purchaseSize"
                                className="purchase-size center-text"
                                value={this.props.purchaseSize}
                                onChange={this.props.updateRegisterFormField.bind(this)} 
                                placeholder="Purchase Size *" />
                    </div>
                    <div className="col-sm-3 pl-0">
                        <div className="inline-right">
                            <p>100 ETH</p>
                            <span>maximum</span>
                        </div>
                    </div>
                </div>
                <div id="_purchaseSize" className={"warning-text" + (this.props.purchaseSizeCheck ? ' hidden' : '')}>Please enter an amount between 1 Ether and 100 Ether</div>

                <div className="pt-20 center-text">
                    <div onClick={(e) => {e.preventDefault(); this.props.submit()}} className="btn btn-register-complete">COMPLETE REGISTRATION</div>
                </div>
                { this.props.submission ? <div className="loader"></div> : '' }
            </div>
        )
    }
}

const structuredSelector = createStructuredSelector({
    step3: selectStep3,
    purchaseSize: selectPurchaseSize,
    purchaseSizeCheck: selectPurchaseSizeCheck,
    submission: selectSubmission
})

const mapDispatchToProps = dispatch => {
    return { 
        updateRegisterFormField: (e) => {
            dispatch(updateRegisterFormField(e.target.name, e.target.value))
        },
        updateRecaptchaResp: (userResponse) => {
            dispatch(updateRecaptchaResponse(userResponse));
        },
        fetchCaptchaResponse: (userResponse, accessID, apiToken) => {
            dispatch(fetchCaptchaResponse(userResponse, accessID, apiToken))
        },
        updateRecaptchaPassed: ()=>{
            dispatch(setRecaptchaPassed(true));
        }
    }
}

export default connect(
    structuredSelector,
    mapDispatchToProps
)(Step3)
