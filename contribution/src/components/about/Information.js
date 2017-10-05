import React, { PureComponent } from 'react';
import TokenInformation         from './information/TokenInformation';
import TokenFunction            from './information/TokenFunction';
import TokenBreakdown           from './information/TokenBreakdown';
import ProjectOverview          from './information/ProjectOverview';
import TokenSupply              from './information/TokenSupply';
import TokenLockup              from './information/TokenLockup';
import Secondary                from './information/Secondary';
import UseOf                    from './information/UseOf';
import Escrow                   from './information/Escrow';

export default class Information extends PureComponent {
    render(){
        return (
            <section id="information" className="pv-20">
                <TokenInformation />
                <TokenFunction />
                <TokenBreakdown />
                <ProjectOverview />
                <TokenSupply />
                <TokenLockup />
                <Secondary />
                <UseOf />
                <Escrow />
            </section>
        )
    }
}