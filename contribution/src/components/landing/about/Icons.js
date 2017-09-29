import React, { PureComponent } from 'react';
import Consensys                from '../../../public/img/consensyslogo.png';

export default class Icons extends PureComponent{
    render(){
        return(
            <section id="icon-container">
                <div className="container">
                    <div className="row center-text">
                        <div className="col-sm-4">
                            <img src={Consensys} alt="Ease of use" />
                            <h3>Beautiful UI</h3>
                            <h3>Ease of Use</h3>
                        </div>
                        <div className="col-sm-4">
                            <img src={Consensys} alt="Ease of use" />
                            <h3>Decentralized</h3>
                            <h3>Derivatives Trading</h3>
                        </div>
                        <div className="col-sm-4">
                            <img src={Consensys} alt="Ease of use" />
                            <h3>Secure</h3>
                            <h3>Provable Audit</h3>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}