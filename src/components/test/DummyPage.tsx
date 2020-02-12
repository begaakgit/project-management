import { Component } from 'react'
import * as React from 'react'


export class DummyPage extends Component<PropsDummy, StateDummy> {
    constructor(props) {
        super(props)
    
        
    }
    
    state: StateDummy = {
        companyname: "",
        city: "",
        email: "",
        loading: "Loading...."
    }
     
    show = () => {
        this.setState(
            {

                companyname: this.props.companyname,
                city: this.props.city,
                email: this.props.email
            }
        )
    }

    componentDidMount() {
        this.setState({
            loading: ""
        })
    }

    public render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-lg-5"}>
                        <h1>Person Information</h1>
                        <h1>{this.props.name}</h1>
                        <h1>{this.props.fatherName}</h1>
                        <h1>{this.props.age}</h1>
                        <h1>{this.props.designation}</h1>
                    </div>
                    <div className={"col-lg-2"}>{this.state.loading}</div>
                    <div className={"col-lg-5"}>
                        <button className={" btn btn-primary"} onClick={this.show} >Show Company Info</button>
                        <h1>Company Information</h1>
                        <h1>{this.state.companyname}</h1>
                        <h1>{this.state.city}</h1>
                        <h1>{this.state.email}</h1>
                    </div>
                </div>
            </div>

        )
    }
}
export interface PropsDummy {
    name: string,
    fatherName: string,
    designation: string | null,
    age?: number,
    companyname?: string,
    city?: string,
    email?: string,
}
export interface StateDummy {
    companyname?: string,
    city?: string,
    email?: string,
    loading: string
}
export interface dummyMethod {
    dummymethod(): void;
}
