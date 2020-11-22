import React, {Component} from 'react'
import Style from './Skills.module.css'

import Button from '@material-ui/core/Button'
import {FiEdit} from 'react-icons/fi'
import {MdAdd} from 'react-icons/md'


class Skills extends Component{
    render(){
        return(
            <div className={Style.skillsContainer}>
                <div className={Style.skillsHeader}>
                    <div>
                         <p className={Style.skillsCaption}>Skills</p>
                    </div>
                    <div>
                        <Button><FiEdit style={{marginRight:"5px"}}/>Edit</Button>
                        <Button><MdAdd style={{marginRight:"5px"}}/>Add</Button>
                    </div>
                </div>
                <hr className={Style.divider}/>
                <div className={Style.skillBody}>
                    <p>Spring Framework</p>
                    <p>React Js</p>
                    <p>Docker</p>
                    <p>Java</p>
                    <p>DataBase</p>
                    <p>Microservices</p>
                </div>

            </div>
        )
    }
}

export default Skills;
