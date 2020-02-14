import { Component } from 'react'
import * as React from 'react'
import { IPropsCardInline } from '../../../data/props/components/cards/CardInline'

interface IStateCardInline{
    Name:string
}
export class CardInline extends Component<IPropsCardInline,IStateCardInline> {
    render() {
        return (
            <div className="row">
            <div className="col-lg-4">
                {this.props.children}
            </div>
            <div className="col">
        <h4 className="card-title">{this.props.title}</h4>
                <p className="card-text">
                    {this.props.description}
                 </p>
            </div>
        </div>
        )
    }
}


