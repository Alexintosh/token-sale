import React, { Component }     from 'react';
import uuidv4                   from 'uuid/v4';

export default class Accordian extends Component{
    constructor(){
        super();
        this.state={ display: false }
    }
    displayAccordian(showing){
        if(showing)
            this.setState({ display: false })
        else
            this.setState({ display: true })
    }
    render(){
        const questions = this.props.questions.map((q)=>{
            return <div key={uuidv4()}><p><span className="font-bold">Q:</span> {q.question}</p><p><span className="font-bold">A:</span> {q.answer}</p></div>
        })
        return(
            <div id={this.props.id} className="accordian-header" onClick={() => this.displayAccordian(this.state.display)}>
                {this.props.header}
                {this.state.display ? <i className="fa fa-minus" aria-hidden="true"></i> : <i className="fa fa-plus" aria-hidden="true"></i> }
                <div className={"accordian-container" + (this.state.display ? '' : ' hide' )}>
                    { questions }
                </div>
            </div>
        )
    }
}