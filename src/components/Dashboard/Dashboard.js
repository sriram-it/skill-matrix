import React, {Component} from 'react'
import './Dashboard.css'
import {Dashboard1} from './Dashboard1'
class Dashboard extends Component {
    render(){
        return(
            <div className="dashboard-wrapper">
                <div className="navbar">
                    NavBar
                </div>
                <div className="dashboard">
                    <div className="header-bar">
                        Header
                    </div>
                   {/* <div className="skills">
                        <h3>SKILLS</h3>
                        <table className="skills-table">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Version</td>
                                    <td>Professional Experience</td>
                                    <td>Score</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Java</td>
                                    <td>1.9</td>
                                    <td>2 years</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Java</td>
                                    <td>1.9</td>
                                    <td>2 years</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Java</td>
                                    <td>1.9</td>
                                    <td>2 years</td>
                                    <td>80</td>
                                </tr>
                                <tr>
                                    <td>Java</td>
                                    <td>1.9</td>
                                    <td>2 years</td>
                                    <td>80</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>  */}
                    <div className="sk">
                        <h3>Skills</h3>
                        <Dashboard1/>
                        <Dashboard1/>
                        <Dashboard1/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard