import { Component } from 'react'
import * as React from 'react'
import { IPropsNavbar } from '../../../data/props/components/header/navbar/index'
// import { Images } from '../../image'


interface StateNav {
    values: (object)[]
}
export class Navbar extends Component<IPropsNavbar, StateNav> {



    public withli = (container: string, values: (object)[]) => {
        return (
            <ul className={container}>
                {values.map((value, index) => {
                    return (
                        <li key={index} className="nav-item">
                            <a id={value['id']} className="nav-link" href={value['link']}>{value['title']}</a>
                        </li>
                    )
                })}
            </ul>

        )
    }

    public nav = (container: string, title: string, withIcon: boolean, values: (object)[]) => {


        //    let icon = (typeof withIcon === 'boolean' && withIcon === true) ? <i className="fa fa-search"></i>: withIcon;
        if (withIcon) {
            return (
                <nav className={container}>
                    <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
                    {values.map((value, index) => {
                        return (

                            <li key={index} className="nav-item  justifiy-content-around">
                                <a id={value['id']} className="nav-link" href={value['link']}><i className={value['icon']}></i> {value['title']}</a>
                            </li>
                        )
                    })}
                </nav>
            )

        }
        else {
            return (
                <nav className={container}>
                    <h6 className="card-subtitle mb-2 text-muted">{title}</h6>
                    {values.map((value, index) => {
                        return (

                            <li key={index} className="nav-item  justifiy-content-around">
                                <a id={value['id']} className="nav-link" href={value['link']}>
                                    {value['title']}
                                    {JSON.stringify(value['images'])}

                                    {/* <Images  {...value['images']} /> */}

                                    {

                                        Array.from(value['images']).map((item, index) => {

                                        })
                                    }



                                </a>
                            </li>
                        )
                    })}
                </nav>
            )
        }
    }





    public render() {

        let nav = (this.props.list) ? this.withli(this.props.container, this.props.values) : this.nav(this.props.container, this.props.title, this.props.withIcon, this.props.values)
        return (
            <div className={"col"}>

                <div className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {nav}
                    </div>
                </div>

            </div>
        )
    }
}


