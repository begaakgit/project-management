import { Component } from 'react'
import * as React from 'react'
import { IPropsImage } from '../../data/props/components/images'

interface IStateImage {
    values: (object)[]
}

export class Images extends Component<IPropsImage, IStateImage> {
    public render() {
        let style={
            
            width: "90px"
            
        }
        return (
            <div className="row justify-content-md-center">
                {
                    this.props.values.map((item, index) => {
                        return (
                            <img style={style} key={index} className={item['className']} id={item['id']} src={item['src']} alt="image"/>
                        )
                    })
                }
               
            </div>
        )
    }
}
{/* <img className="rounded" src="/images/pathToYourImage.png" alt="Rounded image"></img> */ }
