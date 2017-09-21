import React, { PureComponent } from 'react';
import uuidv4                   from 'uuid/v4';

export default class SectionStep extends PureComponent{
    render(){
        var i=0;
        const steps = this.props.paragraphs.map((step)=>{
            i++;
            return <li key={uuidv4()}>Step {i}: { step }</li>
        })
        return(
            <ul className="contribute-step">
                { steps }
            </ul>
        )
    }
}