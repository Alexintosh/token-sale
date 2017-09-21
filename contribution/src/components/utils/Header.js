import React, { PureComponent } from 'react';
import { information }         from '../pages.json';

export default class Header extends PureComponent{
    render(){
        return(
            <section id="sale-header">
                <div className="container">
                    <div className="center-text">
                        <h1>{information.tokenName}</h1>
                        <p>{information.description}</p>
                    </div>
                </div>
            </section>
        )
    }
}