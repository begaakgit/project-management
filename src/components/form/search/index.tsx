import { Component } from 'react'
import * as React from 'react'
import { IPropsSearchBar } from '../../../data/props/components/form/search'
interface IStateSearch {
    values: (object)[]
}
export class SearchBar extends Component<IPropsSearchBar, IStateSearch> {
  public  render() {
        return (
            
               
            
<div className="input-group">
                        <input  type={this.props.type} name={this.props.name} className="form-control" placeholder={this.props.placeholder} />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button">
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>

        )
    }
}

