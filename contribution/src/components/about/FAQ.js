import React, { PureComponent } from 'react';
import faq                  from './faq/faq.json';
import Accordian            from './faq/Accordian';
import uuidv4               from 'uuid/v4';

export default class FAQ extends PureComponent {
    render(){
        const questions = faq.map((section)=>{
            return <Accordian key={uuidv4()} id={ section.id } header={ section.header } questions={ section.questions } />
        })
        return(
            <section id="faq">
                <h2 className="sub-header-large pt-30"><span>FAQ</span></h2>
                { questions }
            </section>
        )
    }
}