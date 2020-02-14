import { Component } from 'react'
import * as React from 'react'
import { Container } from '../layouts/container/container'
import { Sidebar } from '../components/sidebar/sidebar'
import { Navbar } from '../components/header/navbar/index'
import { propsNavbar, propsNavbar_sidebar, propsNavbar_sidebarProjects, propsNavbar_sidebarTeam } from '../data/props/components/header/navbar/index'
import { MainRight } from '../components/main/mainright'
import { FormAuth } from '../components/form/auth'
import { propsForm } from '../data/props/components/form/auth/form/index'
import { propsInput } from '../data/props/components/form/input'
import Input from '../components/form/input'
import { TextArea } from '../components/form/textarea'
import { propsTextarea } from '../data/props/components/form/textarea'
import { Button } from '../components/form/button'
import { Ipropsbutton } from '../data/props/components/form/Button'
import { Images } from '../components/image'
import { propsimage } from '../data/props/components/images'
import { propsMainRight } from '../data/props/components/main/mainRight'
import { SearchBar } from '../components/form/search'
import { propsSearchBar } from '../data/props/components/form/search'
import { CardInline } from '../components/cards/Inline'
import { propsCardInline } from '../data/props/components/cards/CardInline'


export class App extends Component {
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
                    <h4>Profile Setting</h4>
                    <Navbar {...propsNavbar} />
                    <MainRight {...propsMainRight}>

                        <FormAuth {...propsForm}>
                            <Images {...propsimage} />
                            <Input {...propsInput} />
                            <TextArea {...propsTextarea} />
                            <Button {...Ipropsbutton} />
                        </FormAuth>


                    </MainRight>

                </div>
            </Container>

        )
    }
}





























