import React, {Component} from 'react'
import {FiMenu} from 'react-icons/fi'
import {FaTimes} from 'react-icons/fa'
import Style from './NavBar.module.css'

class NavBar extends Component {

    constructor(){
        super();
        this.state = {
            isClicked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            isClicked: !this.state.isClicked
        })
    }

    render(){
        return(
            <div className={Style.navbar}>
                <div className={Style.navbarContainer}>
                
                    <h2 className={Style.logo}>Logo
                        <i className={Style.menuIcon} onClick={this.handleClick}>
                            {this.state.isClicked ? <FiMenu/> : <FaTimes/>}
                        </i>
                    </h2>
                    {/* <div className={ this.state.isClicked ? "menu" : "menu active"}>  */}
                    <div className={Style.menu}>
                        <ul className={Style.menuItems}>
                            <li>Explore</li>
                            <li>Help</li>
                        </ul>
                        <div className={Style.menuActions}>
                            <p>Sriram Elangovan</p>
                            <button>Log Out</button>
                        </div> 
                    </div>    
                </div>
            </div>
        )     
    }
}

export default NavBar;