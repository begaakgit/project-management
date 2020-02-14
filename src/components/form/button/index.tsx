import { Component } from 'react'
import * as React from 'react'
import { IPropsButton } from '../../../data/props/components/form/Button'
interface IStateButton {
    values: (object)[]
}

export class Button extends Component<IPropsButton, IStateButton> {
    public render() {
        return (
            <span>
                {
                    this.props.values.map((item, index) => {
                        return (
                            <button key={index} type={item['type']} className={item['className']} id={item['id']} >{item['text']}</button>
                        )
                    }
                    )
                }
            </span>
        )
    }
}





