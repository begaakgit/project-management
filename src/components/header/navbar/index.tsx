import { Component } from 'react'
import * as React from 'react'
import { IPropsNavbar } from '../../../data/props/components/sidebar/index'
 

interface StateNav {
    values: (object)[]
}
export class Navbar extends Component<IPropsNavbar, StateNav> {

   

    public render() {
  
        return (
            <div className={"col"}>
                
                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {this.props.values.map((value, index) => {
                                return (
                                    <li key={index} className="nav-item active">
                                        <a className="nav-link" href={value['link']} >{value['title']}<span className="sr-only">(current)</span></a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}


