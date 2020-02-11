import { Component } from 'react'
import * as React from 'react'

interface IState {
    key: number | null,
    name: string,
    email: string,
    dev: boolean,
    age: number
}

export interface IProps {
    name: string,
    email?: string,
    address?: string,
    age?: number,
    senior?: boolean
}


export class Container extends Component<IProps, IState> {
    state: IState = {
        key: Math.random(),
        name: "",
        age: 0,
        dev: false,
        email: "test@test.com"
    }
    update = () => {
        this.setState(
            {
                key: Math.random()
            }
        )
    }
    public render() {
        return (
            <div>
                <h3>{this.state.key!}</h3>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.address}</p>
                <p>{this.props.age}</p>
                <p>{this.props.senior}</p>
                <button onClick={this.update}>Update Key</button>
            </div>
        )
    }
}