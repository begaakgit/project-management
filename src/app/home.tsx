import { Component } from 'react'
import * as React from 'react'
import { Container } from '../layouts/container/container'
import { Sidebar } from '../components/sidebar/sidebar'
import { Navbar } from '../components/header/navbar/index'
import { propsNavbar_sidebar, propsNavbar_sidebarProjects, propsNavbar_sidebarTeam } from '../data/props/components/header/navbar/index'
import { MainRight } from '../components/main/mainright'
import { Images } from '../components/image'
import { propsimage } from '../data/props/components/images'
import { propsMainRight } from '../data/props/components/main/mainRight'
import { SearchBar } from '../components/form/search'
import { propsSearchBar } from '../data/props/components/form/search'
import { CardInline } from '../components/cards/Inline'
import { propsCardInline } from '../data/props/components/cards/CardInline'
import { Button } from '../components/form/button'
import { AlertDismissible } from '../components/alert/dismissible'
import { ProgressBar } from '../components/progressbar/animated'
import { List } from '../components/lists'


export class Home extends Component {
    public render() {
        return (

            <Container>
                <Sidebar>

                    <SearchBar {...propsSearchBar} />

                    <CardInline {...propsCardInline}>
                        <Images {...propsimage} />
                    </CardInline>
                    {/* tasks label */}
                    <div className="row">
                        <div className="col">
                            <div>355</div>
                            <div><h4 className="card-title">Completed Task</h4></div>
                        </div>
                        <div className="col">
                            <div>11</div>
                            <div><h4 className="card-title">Open Tasks</h4></div>
                        </div>
                    </div>
                    {/* tasks label ended */}

                    <Navbar {...propsNavbar_sidebar} />
                    <Navbar {...propsNavbar_sidebarProjects} />
                    <span className="row justifiy-content-around">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <button type="button" className="btn btn-link ">Add a Project</button>
                    </span>
                    <Navbar {...propsNavbar_sidebarTeam} />
                    <span className="row justifiy-content-around">
                        <i className="fa fa-plus" aria-hidden="true"></i>
                        <button type="button" className="btn btn-link ">Add a Team</button>
                    </span>

                    {/* footer */}
                    <span className="row justifiy-content-around">
                        <button type="button" className="btn btn-link ">Invite your team</button>
                    </span>

                </Sidebar>
                <div className="col-lg-9">
                    <h4>Home</h4>
                    <Button {...{
                        values: [
                            {
                                type: "button",
                                className: "btn btn-success float-right",
                                text: "+Add",
                                id: "add"
                            }
                        ]
                    }} />

                    <MainRight {...propsMainRight}>
                        <div className="col-lg-6">
                            <AlertDismissible
                                text='Confirm your Email Address for Company@gmail.com'
                            />
                            <ProgressBar />

                            <List/>

                        </div>


                        <div className="col-lg-3">
                        <List/>
                        </div>

                    </MainRight>

                </div>
            </Container>

        )
    }
}





























