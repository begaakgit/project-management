import { Component } from 'react'
import * as React from 'react'
import { Container, IProps } from './Container'


export class App extends Component {
    public render() {
        const props: IProps = {
            name: "Rashid Iqbal"
        }
        return (
            <div>
                <Container {...props} />
            </div>
        )
    }
}