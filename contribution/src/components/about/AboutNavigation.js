import React, { PureComponent } from 'react';
import uuidv4                   from 'uuid/v4';
import Scrollspy from 'react-scrollspy'

export default class AboutNavigation extends PureComponent {
    render(){
        return(
            <section id="about-nav" className={(this.props.stuck ? 'about-stuck' : 'h-90')}>
                <Scrollspy items={ ['overview', 'information', 'contribute', 'whitepaper', 'audit', 'faq'] } currentClassName="is-current" className="about-list">
                    <li key={uuidv4()}><a href="#overview">OVERVIEW</a></li>
                    <li key={uuidv4()}><a href="#information">TOKEN INFORMATION</a></li>
                    <li key={uuidv4()}><a href="#contribute">HOW TO CONTRIBUTE</a></li>
                    <li key={uuidv4()}><a href="#whitepaper">WHITEPAPER</a></li>
                    <li key={uuidv4()}><a href="#audit">CODE AUDIT</a></li>
                    <li key={uuidv4()}><a href="#faq">FAQ</a></li>
                </Scrollspy>
            </section>
        )
    }
}