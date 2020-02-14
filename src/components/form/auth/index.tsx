import { Component } from 'react'
import * as React from 'react'
import { IPropsForm } from '../../../data/props/components/form/auth/form'

interface StateForm {
    value: (object)[]
}

export class FormAuth extends Component<IPropsForm, StateForm> {
    constructor(props) {
        super(props)


    }

    public render() {
        return (
            <form className={this.props.className}>
                {this.props.children}
            </form>

        )
    }
}


