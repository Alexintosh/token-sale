import React, { PureComponent } from 'react';

export default class TokenFunction extends PureComponent{
    render(){
        return (
            <div className="about-card">
                <h2 className="sub-header"><span>TOKEN FUNCTION</span></h2>
                <p>
                    A fixed number of LEV tokens (1 billion) will be minted before the upcoming token sale - this will be
                    the only time LEV are created. Leverj is selling 40% of these LEV created in the token sale.
                </p>
                <p>
                    The secondary token, FEE, will have a varying supply adjusts based on the behaviour of Leverj
                    ecosystem stakeholders. Its market price will have a targeted range, with a game theoretically
                    designed system reinforcing it.
                </p>
            </div>
        )
    }
}