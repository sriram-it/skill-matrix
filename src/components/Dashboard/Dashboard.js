import React, {Component} from 'react'
import './Dashboard.css'
class Dashboard extends Component {
    render(){
        return(
            <div class="dashboard-wrapper">
                <div class="navbar">
                    NavBar
                </div>
                <div class="dashboard">
                    <div class="header-bar">
                        Header
                    </div>
                    <div class="skills">
                        <h3>Skills</h3>
                        <table class="skills-table">
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard