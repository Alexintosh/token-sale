import React, { Component }               from 'react';
import { connect }                        from 'react-redux'; 
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Registration         from './components/register/Registration';
import Thankyou             from './components/register/Thankyou';
import Header               from './components/utils/Header';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="pt-50">
          <div className="min-height">
            <Header />
            <Route exact path="/" component={Registration} />
            <Route exact path="/success" component={Thankyou} />
          </div>
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