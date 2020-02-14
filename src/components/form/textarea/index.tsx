import { Component } from 'react'
import * as React from 'react'
import { IpropsTextarea } from '../../../data/props/components/form/textarea'
interface IStateTextArea {
    values: (object)[]
}
export class TextArea extends Component<IpropsTextarea, IStateTextArea> {
    render() {
        return (
            <div>
                {
                    this.props.values.map((item, index) => {
                        return (
                            <div key={index} className="form-group">
                                <label htmlFor={item['id']}>{item['label']}</label>
                                <textarea name={item['name']} className="form-control" id={item['id']} rows={item['rows']} placeholder={item['placeholder']}  ></textarea>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


