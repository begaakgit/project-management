import { Component } from 'react'
import * as React from 'react'
import { Container } from '../layouts/container/container'
import { Sidebar } from '../components/sidebar/sidebar'
import { Navbar } from '../components/header/navbar/index'
import { propsNavbar } from '../data/props/components/sidebar/index'
import { MainRight } from '../components/main/mainright'
import { FormAuth } from '../components/form/auth'
import { propsForm } from '../data/props/components/form/auth/form/index'
import { propsInput } from '../data/props/components/form/input'
import Input from '../components/form/input'

export class App extends Component {
    public render() {




        return (

            <Container>
                <Sidebar>
                    <div>
                        <h1>this is side bar</h1>
                    </div>
                </Sidebar>
                <div className="col-lg-9">
                    <Navbar {...propsNavbar} />
                    <MainRight>
                        <FormAuth {...propsForm}>
                            <Input {...propsInput} />
                        </FormAuth>
                        <div>
                            <h1>this is main content</h1>
                        </div>
                    </MainRight>

                </div>
            </Container>

        )
    }
}





























