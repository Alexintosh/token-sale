import React, { PureComponent } from 'react';
import { information }          from '../pages.json';
import leverjlogo               from '../../public/img/leverjlogo.svg';

export default class Header extends PureComponent{
    render(){
        return(
            <section id="sale-header">
                <img src={ leverjlogo } alt="LeverJ Logo" className="nav-logo" />
                <div className="nav-header">LEVERJ.IO</div>
                <div className="container">
                    <div className="center-text row">
                        <div className="col-md-8 col-md-offset-2">
                            <h1>{information.tokenName}</h1>
                            <p>{information.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}