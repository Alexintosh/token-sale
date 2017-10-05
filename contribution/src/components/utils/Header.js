import React, { PureComponent } from 'react';
import leverjlogo               from '../../public/img/leverjlogo.svg';

export default class Header extends PureComponent{
    render(){
        return(
            <section id="sale-header">
                <img src={ leverjlogo } alt="Leverj Logo" className="nav-logo" />
                <div className="nav-header">LEVER<span className="color-text">J</span></div>
            </section>
        )
    }
}