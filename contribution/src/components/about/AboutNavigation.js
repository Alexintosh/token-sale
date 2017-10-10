import React, { PureComponent } from 'react';
import uuidv4                   from 'uuid/v4';
import Scrollspy                from 'react-scrollspy'
import consensys                from '../../public/img/consensyslogoblack.png';

export default class AboutNavigation extends PureComponent {
    render(){
        return(
            <section id="about-nav" className={(this.props.stuck ? 'about-stuck' : 'h-90')}>
                <Scrollspy items={ ['overview', 'whitelist', 'information', '', 'contribute', 'whitepaper', 'audit', 'faq'] } currentClassName="is-current" className="about-list">
                    <li key={uuidv4()}><a href="#overview"><i className="fa fa-circle nav-circle" aria-hidden="true"></i>OVERVIEW</a></li>
                    <li key={uuidv4()}><a href="#whitelist"><i className="fa fa-circle nav-circle" aria-hidden="true"></i>WHITELIST INFO</a></li>
                    <li key={uuidv4()}><a href="#information"><i className="fa fa-circle nav-circle" aria-hidden="true"></i>TOKEN INFO</a></li>
                    <li key={uuidv4()}><a href="https://leverj.io/tc.html" target="_blank" rel="noopener noreferrer"><i className="fa fa-circle nav-circle" aria-hidden="true"></i>TERMS & CONDITIONS</a></li>
                    <li key={uuidv4()}><a href="#contribute"><i className="fa fa-circle nav-circle" aria-hidden="true"></i>HOW TO CONTRIBUTE</a></li>
                    <li key={uuidv4()}><a href="#whitepaper"><i className="fa fa-circle nav-circle" aria-hidden="true"></i>WHITEPAPER</a></li>
                    <li key={uuidv4()}><a href="#audit"><i className="fa fa-circle nav-circle" aria-hidden="true"></i>CODE AUDIT</a></li>
                    <li key={uuidv4()}><a href="#faq"><i className="fa fa-circle nav-circle" aria-hidden="true"></i>FAQ</a></li>
                </Scrollspy>
                
                <div className={(this.props.bottom ? 'display-none' : (!this.props.stuck ? 'display-none' : 'consensys-about-img'))}>
                    <img src={consensys} alt="Consensys logo" className="landing-img" />
                    <p className="mb-0">Supported by</p>
                    <p className="fs-25 mb-0">ConsenSys</p>
                </div>
            </section>
        )
    }
}