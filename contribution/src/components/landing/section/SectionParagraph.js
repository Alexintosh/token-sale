import React, { PureComponent } from 'react';
import uuidv4                   from 'uuid/v4';

export default class SectionParagraph extends PureComponent{
    render(){
        const paragraphs = this.props.paragraphs.map((paragraph)=>{
            return <p key={uuidv4()}>{ paragraph }</p>
        })
        return(
            <div>
            { paragraphs }
            </div>
        )
    }
}