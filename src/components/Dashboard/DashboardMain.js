import React, {Component} from 'react'
import NavBar from '../NavBar/NavBar'
import './DashboardMain.css'
import Introduction from '../Introduction/Introduction'
import Skills from '../Skills/Skills'

export class DashboardMain extends Component{
    render(){
        return(
            <>
                <NavBar/>
                <Introduction/>
                <Skills/>
            </>
        )
    }
}

