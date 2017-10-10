import React, { PureComponent } from 'react';
import diligence                from '../../public/img/diligence.png';

export default class Audit extends PureComponent{
    render(){
        return(
            <section id="audit" className="about-card">
                <div className="row">
                    <div className="col-sm-10">
                        <h2 className="sub-header-large"><span>CODE AUDIT</span></h2>
                        <div className="diligence-text">
                            <div className="inline-block"><img src={diligence} alt="ConsenSys Diligence" className="diligence-img" /></div>
                            <div className="inline-block">
                                Consensys Diligence - Security Audit
                            </div>
                        </div>
                        <p className="pb-20">The code is being reviewed by ConsenSys Diligence. The Leverj Token Sale smart contract is being audited and tested. The contracts can be viewed on github.</p>
                        <a href="https://github.com/coinpit/token-sale" target="_blank" rel="noopener noreferrer" className="github pt-30">
                            <i className="fa fa-github fs-40 pr-10" aria-hidden="true"></i>
                             View on GitHub
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}