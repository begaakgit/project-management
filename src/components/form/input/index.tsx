import { Component } from 'react'
import * as React from 'react'
import { IPropsInput } from '../../../data/props/components/form/input'
interface IStateInput {
    values: (object)[]
}
export class Input extends Component<IPropsInput, IStateInput> {
    render() {
      

        return (


            <div>
                {
                this.props.values.map((item, index) => {
                    return (
                        <div key={index} className="form-group">
                            <label htmlFor={item['id']}>{item['label']}</label>
                            <input type={item['type']} name={item['name']}  className="form-control" id={item['id']} placeholder={item['placeholder']}/>
                        </div>
                    )
                })
                }
               
                
            </div>



        )
    }
}

export default Input
