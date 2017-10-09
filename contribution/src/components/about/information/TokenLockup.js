import React, { PureComponent } from 'react';

export default class TokenLockup extends PureComponent{
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header"><span>TOKEN LOCKUP SCHEDULE (VESTMENT PLAN)</span></h2>
                <p>
                    The token vesting schedule, shown below, has been designed to specifically align the long-term interests of the founding team with those of public token sale participants to maintain a consistent and healthy growth of the trading ecosystem. 
                    The long drawn-out vesting schedule also ensures that the team is continuously motivated and stays vested in the success of the project for a longer duration. 
                    Early exit of the core team also impacts the success of the project and thereby the value of the token.
                </p>
                <div className="row">
                    <div className="col-sm-6">
                        <table className="no-table">
                            <thead>
                                <tr>
                                    <th>Percentage</th>
                                    <th>Vesting Schedule</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>10%</td>
                                    <td>Immediately (Day 1)</td>
                                </tr>
                                <tr>
                                    <td>30%</td>
                                    <td>6 Months</td>
                                </tr>
                                <tr>
                                    <td>30%</td>
                                    <td>12 Months</td>
                                </tr>
                                <tr>
                                    <td>30%</td>
                                    <td>18 Months</td>
                                </tr>
                            </tbody>                            
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}