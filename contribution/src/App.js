import React, { Component }               from 'react';
import { connect }                        from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { apiRegister, handleAPIToken }	  from './actions/saleLogic';

import Thankyou             from './components/thankyou/Thankyou';
import EmailSignup          from './components/thankyou/EmailSignup';
import LandingPage          from './components/containers/LandingPage';

import Header               from './components/utils/Header';
import Footer               from './components/utils/Footer';

class App extends Component {
   componentDidMount(){
     apiRegister(this.props.accessId, (apiToken)=>{
        console.log('JS: return from apitoken call with token: ' + apiToken);
        this.props.setAPIToken(apiToken);
     });
   }
   render() {
    return (
      <Router>
        <div className="pt-50">
          <div className="min-height">
              <Header />
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/success" component={Thankyou} />
              <Route exact path="/email-signup" component={EmailSignup} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    accessId: state.sale.accessId
  }
}
const mapDispatchToProps = dispatch => {
   return {
     setAPIToken: (apitoken) => {
        dispatch(handleAPIToken(apitoken));
     }
   }	   
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
