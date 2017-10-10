import React, { PureComponent } from 'react';
import { slide as Menu } from 'react-burger-menu'

export default class Mobile extends PureComponent{
    render(){
        return(
            <div className="mobile-nav">
                <div className="nav-header-mobile">LEVER<span className="color-text">J</span></div>
                <Menu width={'80%'}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                    <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                </Menu>
            </div>
        )
    }
}