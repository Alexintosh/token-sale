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
                        <p className="pb-20">The Leverj Token Sale smart contract code is currently being audited and tested by ConsenSys Diligence. Full audit report will be available below before the public sale on November 7th, 2017. The contracts can be viewed on github anytime.</p>
                        <a href="https://github.com/coinpit/token-contracts" target="_blank" rel="noopener noreferrer" className="github pt-30">
                            <i className="fa fa-github fs-40 pr-10" aria-hidden="true"></i>
                             <span className="view-on">View on GitHub</span>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}