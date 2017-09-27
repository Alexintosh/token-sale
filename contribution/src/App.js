import React, { Component }               from 'react';
import { connect }                        from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { apiRegister, handleAPIToken }	  from './actions/saleLogic';
import Thankyou             from './components/register/Thankyou';
import EmailSignup          from './components/register/EmailSignup';
import SinglePage           from './components/landing/containers/SinglePage';
import Contribute           from './components/sale/containers/Contribute';

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
              <Route exact path="/" component={SinglePage} />
              <Route exact path="/success" component={Thankyou} />
              <Route exact path="/email-signup" component={EmailSignup} />
              {
                  !this.props.register &&
                  <Route exact path="/contribute" component={Contribute} />
              }
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    accessId: state.sale.accessId,
    register: state.sale.register
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
