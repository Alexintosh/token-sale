import React, { Component }               from 'react';
import { connect }                        from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Thankyou             from './components/register/Thankyou';
import EmailSignup          from './components/register/EmailSignup';
import SinglePage           from './components/landing/containers/SinglePage';
import Contribute           from './components/sale/containers/Contribute';

import Header               from './components/utils/Header';
import Footer               from './components/utils/Footer';


class App extends Component {
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
    register: state.sale.register
  }
}
export default connect(
  mapStateToProps
)(App)