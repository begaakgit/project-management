import { Component } from 'react'
import * as React from 'react'
import { IpropsMainRight } from '../../../data/props/components/main/mainRight'
interface IStateMainRight {
    values: (object)[]
}
export class MainRight extends Component<IpropsMainRight, IStateMainRight> {
    constructor(props) {
        super(props)


    }

    public render() {
        return (
            <div className={"container"}>
                <div className={this.props.className}>
                    {this.props.children}
                    </div>
            </div>
        )
    }
}


