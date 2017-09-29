import React, { PureComponent } from 'react';
import SectionInformation       from './SectionInformation';
import uuidv4                   from 'uuid/v4';

export default class Sections extends PureComponent {
    render(){
        const information = this.props.details.map((info)=>{
            return <SectionInformation header={info.header} type={info.type} paragraphs={info.paragraphs} key={uuidv4()}/>
        })
        return(
            <section className="about-section">
                <div className="about-card" id={this.props.link}>
                    <h2><span>{this.props.header}</span></h2>
                    {information}
                </div>
            </section>
        )
    }
}