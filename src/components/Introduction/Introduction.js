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
            <Typography className= {Style.textBig} variant="h5">
              <AiOutlineUser /> Sriram Elangovan
            </Typography>
            <Typography variant="body1">Programmer Analyst</Typography>
          </div>
          <div>
            <Typography variant="body1">e.sriram07@gmail.com</Typography>
            <Typography variant="body1">E1503</Typography>
          </div>
        </div>
        <hr className={Style.divider}/>
        <div className={Style.about}>
          <div className={Style.aboutHeader}>
              <Typography className={Style.aboutCaption} variant="h6">About</Typography>
              <Button><FiEdit style={{marginRight:"5px"}}/>Edit</Button>
          </div>
          <Typography className={Style.aboutContent} variant="body1">
            Experienced full-stack web application developer with a demonstrated
            history of working in the product and service industry. Skilled in
            Spring Boot, Spring Framework, React JS, Web Services, ORM
            Technology, Database Design, and Management. Strong engineering
            professional with a Bachelor's degree focused on Information
            Technology from Hindusthan College Of Engineering and Technology,
            Anna University.
          </Typography>
        </div>
      </div>
    );
  }
}

export default Introduction;
