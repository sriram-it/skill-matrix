import React, { Component } from "react"
import Button from "@material-ui/core/Button/Button"

import Style from "./Introduction.module.css"
import { AiOutlineUser } from "react-icons/ai"
import {FiEdit} from "react-icons/fi"
import Typography from '@material-ui/core/Typography'

class Introduction extends Component {
  render() {
    return (
      <div className={Style.introductionContainer}>
        <div className={Style.basicDetails}>
          <div>
            <p className= {Style.textBig}>
              <AiOutlineUser /> Sriram Elangovan
            </p>
            <p>Programmer Analyst</p>
          </div>
          <div>
            <p>e.sriram07@gmail.com</p>
            <p>E1503</p>
          </div>
        </div>
        <hr className={Style.divider}/>
        <div className={Style.about}>
          <div className={Style.aboutHeader}>
              <p className={Style.aboutCaption}>About</p>
              <Button><FiEdit style={{marginRight:"5px"}}/>Edit</Button>
          </div>
          <p className={Style.aboutContent}>
            Experienced full-stack web application developer with a demonstrated
            history of working in the product and service industry. Skilled in
            Spring Boot, Spring Framework, React JS, Web Services, ORM
            Technology, Database Design, and Management. Strong engineering
            professional with a Bachelor's degree focused on Information
            Technology from Hindusthan College Of Engineering and Technology,
            Anna University.
          </p>
        </div>
      </div>
    );
  }
}

export default Introduction;
