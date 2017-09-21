import React, { PureComponent } from 'react';
import ConsenSysLogo            from '../../public/img/consensyslogo.png';
import facebook                 from '../../public/img/facebook1.svg';
import medium                   from '../../public/img/medium1.svg';
import slack                    from '../../public/img/slack1.svg';
import twitter                  from '../../public/img/twitter1.svg';

export default class Footer extends PureComponent{
    render(){
        return(
            <section id="footer">
                <div className="container">
                    <div className="row center-text">
                        <div className="col-sm-6 involved">
                            <h3>Get Involved!</h3>
                            <img src={facebook} alt="Facebook Logo" />
                            <img src={medium} alt="Medium Logo" />
                            <img src={slack} alt="Slack Logo" />
                            <img src={twitter} alt="Twitter Logo" />
                        </div>
                        <div className="col-sm-6 consensys-logo">
                            <img src={ConsenSysLogo} alt="ConsenSys Logo" />
                            <p>ConsenSys Mesh Company</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}