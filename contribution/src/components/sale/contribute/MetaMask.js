import React, { Component } from 'react';
import Account                  from '../metamask/Account';
import Contract                 from '../metamask/Contract';
import Input                    from '../metamask/Input';
import { getMetaMask }          from '../../../utils/metaMask';

export default class MetaMask extends Component{
    constructor(){
        super();
        this.state={
            address: null,
            balance: 0
        }
    }
    componentDidMount(){
        var timer = setInterval(()=>{
            getMetaMask((res)=>{
                if(res.error === null) {
                    this.setState({
                        address: res.address,
                        balance: res.balance
                    })
                    clearInterval(timer);
                }
            })
        }, 2000)
    }
    render(){
        return(
                <div className="container">
                {
                        this.state.address === null 
                    ?
                        <p>Please login to your Metamask account</p>
                    :
                        <div>
                            <div className="row pv-30">
                                <div className="col-sm-6">
                                    <Account address={ this.state.address } balance={ this.state.balance } />
                                </div>
                                <div className="col-sm-6">
                                    <Contract />
                                </div>
                            </div>
                            <Input />
                        </div>
                }
                </div>
        )
    }
}