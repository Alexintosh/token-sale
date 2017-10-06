import React, { PureComponent } from 'react';

export default class TokenBreakdown extends PureComponent{
    render(){
        return(
            <div>
                <h2 className="sub-header"><span>TOKEN BREAKDOWN</span></h2>
                <ul>
                    <li>500 million to be distributed in a public token sale with a cap of $10 million sold</li>
                    <li>200 million reserved for MetaX, per the time lock schedule detailed below</li>
                    <li>200 million reserved for ConsenSys, per the time lock schedule detailed below</li>
                    <li>100 million sold to fund development via multiple pre-sale agreements (as described above)</li>
                </ul>
            </div>
        )
    }
}