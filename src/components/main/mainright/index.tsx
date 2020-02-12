import { Component } from 'react'
import * as React from 'react'

export class MainRight extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    public render() {
        return (
            <div className={"Container"}>
                {this.props.children}
            </div>
        )
    }
}


