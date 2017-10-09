import React, { PureComponent } from 'react';
import LandingVideo             from '../utils/LandingVideo';
import ContributeDetail         from './overview/ContributeDetail';

export default class Overview extends PureComponent{
    render(){
        return(
            <section id="overview" className="mv-150">
                <div className="">
                    <h2 className="sub-header-large pb-0"><span>OVERVIEW</span></h2>
                    <div className="row">
                        <div className="col-md-6 hidden-xs">
                            <LandingVideo />
                        </div>
                        <div className="col-md-6">
                            <ContributeDetail />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}