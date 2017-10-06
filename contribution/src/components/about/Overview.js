import React, { PureComponent } from 'react';
import LandingVideo             from '../utils/LandingVideo';
import Supply                   from './overview/Supply';
import ContributeDetail         from './overview/ContributeDetail';

export default class Overview extends PureComponent{
    render(){
        return(
            <section id="overview" className="mv-150">
                <h2 className="sub-header fs-50 pb-0"><span>OVERVIEW</span></h2>
                <div className="row pv-30">
                    <div className="col-md-7 hidden-xs">
                        <LandingVideo />
                    </div>
                    <div className="col-md-5">
                        <ContributeDetail />
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-9">
                                <Supply />
                            </div>
                        </div>
                        <p className="pt-20">
                            *With a tight focus on derivatives trading and the supporting ecosystem, LeverJ has taken the approach of defining the
                            product frst. We have built a functioning exchange with a usable UI (user interface), decentralized identity, and provable
                            audit. We plan to decentralize the back-end and add ecosystem features that will enable large players to move into the
                            cryptocurrency world.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}