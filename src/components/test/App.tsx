import { Component } from 'react'
import * as React from 'react'
import { Container, IProps } from './Container'
import { DummyPage, PropsDummy } from './DummyPage'
export class App extends Component {
    public render() {
        const props: IProps = {
            name: "Rashid Iqbal",
            age: 20,
            senior: true,
            address: "DIK",
        }
        
        const propsdummy:PropsDummy={
            name:"Danish",
            fatherName:"Abdur Rehman",
            designation:"React Dev",
            age:24,
            companyname:"BEGAAK",
            city:"ISLAMABAD",
            email:"begaak.com"
        }
        return (
            <div>
                <Container {...props} />
                <DummyPage  {...propsdummy} />
            </div>
        )
    }
}