import { Component } from 'react'
import * as React from 'react'
import { IPropsAlert } from '../../../data/props/components/alert/dismissible'
interface IStateAlert {

}

export class AlertDismissible extends Component<IPropsAlert, IStateAlert> {
    render() {
        return (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <a href="#!" className="alert-link"><strong>Click Here</strong> {this.props.text}</a>
            </div>
        )
    }
}


