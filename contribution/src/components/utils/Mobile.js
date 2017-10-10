import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'

export default class Mobile extends Component{
    constructor(){
        super();
        this.state={
            display: false
        }
    }
    toggle(){
        this.setState({
            display: false
        })
    }
    render(){
        return(
            <div className="mobile-nav">
                <div className="nav-header-mobile">LEVER<span className="color-text">J</span></div>
                <Menu width={'100%'} isOpen={this.state.display}>
                    <a id="overview" className="menu-item" href="#overview" onClick={() => this.toggle()}>OVERVIEW</a>
                    <a id="information" className="menu-item" href="#information" onClick={() => this.toggle()}>TOKEN INFORMATION</a>
                    <a id="contribute" className="menu-item" href="#contribute" onClick={() => this.toggle()}>HOW TO CONTRIBUTE</a>
                    <a id="whitepaper" className="menu-item" href="whitepaper" onClick={() => this.toggle()}>WHITEPAPER</a>
                    <a id="audit" className="menu-item" href="#audit" onClick={() => this.toggle()}>CODE AUDIT</a>
                    <a id="faq" className="menu-item" href="#faq" onClick={() => this.toggle()}>FAQs</a>
                </Menu>
            </div>
        )
    }
}