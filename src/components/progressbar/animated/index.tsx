import { Component } from 'react'
import * as React from 'react'
// interface IStateProgressBar {

// }

export class ProgressBar extends Component {
 public   render() {

    //  let style={
            
    //     "aria-Valuenow":"75",
    //    "aria-Valuemin":"0",
    //        "aria-Valuemax":'100'
            
    // }
        return (
            <div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" ></div>
            </div>
        )
    }
}


