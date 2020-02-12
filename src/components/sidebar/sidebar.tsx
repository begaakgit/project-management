import { Component } from 'react'
import * as React from 'react'

export class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    public render() {
        return (
            <div className={"col-lg-3"}>
                {this.props.children}
            </div>
        )
    }
}


