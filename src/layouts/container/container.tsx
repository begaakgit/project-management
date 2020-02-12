import { Component } from 'react'
import * as React from 'react'

export class Container extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    public render() {
        return (
            <div className={"container-fluid"}>
                <div className={"row"}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}


