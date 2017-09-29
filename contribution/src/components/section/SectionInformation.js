import React, { PureComponent } from 'react';
import SectionStep              from './SectionStep';
import SectionList              from './SectionList';
import SectionParagraph         from './SectionParagraph';
import uuidv4                   from 'uuid/v4';

export default class SectionInformation extends PureComponent{
    render(){
        var information=[];
        if(this.props.type === 'none'){
            information.push(<SectionParagraph paragraphs={ this.props.paragraphs } key={uuidv4()} />)
        }else if(this.props.type === 'step'){
            information.push(<SectionStep paragraphs={ this.props.paragraphs } key={uuidv4()} />)
        }else if(this.props.type === 'list'){
            information.push(<SectionList paragraphs={ this.props.paragraphs } key={uuidv4()} />)
        }
        return(
            <div>
                {
                    this.props.header.length > 0 && 
                        <h3>{this.props.header}</h3> 
                }
                {information}
            </div>
        )
    }
}