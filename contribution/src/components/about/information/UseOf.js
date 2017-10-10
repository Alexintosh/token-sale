import React, { PureComponent } from 'react';
import breakdown                from '../../../public/img/token_breakdown.png';

export default class UseOf extends PureComponent{
    render(){
        return(
            <div className="about-card">
                <h2 className="sub-header"><span>USE OF PROCEEDS/ BREAKDOWN/ TIMELINE, ETC.</span></h2>
                <p>
                    Disclaimer: Our project is subject to several other considerations that require flexibility in how we spend the raise. 
                    For example, if we get an opportunity to partner with a legacy financial powerhouse, we may need to invest significant resources for speedy implementation. 
                    We may also have opportunity to work with regulators in untapped crypto markets such as the United States that may require unforeseen expenditures. 
                    All-in-all, since we have a centralized component, we have need operational and strategic flexibility unlike a pure protocol project. 
                </p> 
                <div className="center-text">
                    <img src={breakdown} alt="Token Breakdown" className="info-graph" />
                </div>
            </div>
        )
    }
}