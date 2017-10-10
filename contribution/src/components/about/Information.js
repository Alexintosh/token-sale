import React, { PureComponent } from 'react';
import TokenInformation         from './information/TokenInformation';
import TokenSupply              from './information/TokenSupply';
import Ownership                from './information/Ownership';
import TokenLockup              from './information/TokenLockup';
import Secondary                from './information/Secondary';
import UseOf                    from './information/UseOf';
import Summary                  from './information/Summary';

export default class Information extends PureComponent {
    render(){
        return (
            <section id="information">
                <Summary />
                <TokenInformation />
                <TokenSupply />
                <Ownership />
                <TokenLockup />
                <Secondary />
                <UseOf />
            </section>
        )
    }
}