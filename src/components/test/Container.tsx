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
    age: number | null,
    senior?: boolean
}

export interface ConsoleTest {
    printConsole(): void;
}

// 'public' modifier cannot appear on a type member
export interface Logs  extends ConsoleTest{
    log(): void;
}


export class Container extends Component<IProps, IState> implements  Logs {

    public printConsole():void  {
        new Error("")
    }
    public log(): void {

    }

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
                key: this.props.age 
            }
        )
    }
    public render() {
        const person: IProps = this.props
        return (
            <div>
                <h3>{this.state.key}</h3>
                <p>{this.props.name}</p>
                <p>{this.props.email}</p>
                <p>{this.props.address}</p>
                <p>{person.age}</p>
                <p>{this.props.senior}</p>
                <button onClick={this.update}>Update Key</button>
            </div>
        )
    }
}