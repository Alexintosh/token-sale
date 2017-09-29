import React, { PureComponent } from 'react';
import uuidv4                   from 'uuid/v4';

export default class SectionList extends PureComponent{
    render(){
        const lists = this.props.paragraphs.map((paragraph)=>{
            return <li key={uuidv4()}>{ paragraph }</li>
        })
        return(
            <ul>
                { lists }
            </ul>
        )
    }
}