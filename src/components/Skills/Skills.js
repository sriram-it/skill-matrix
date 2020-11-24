import React, {Component} from 'react'
import Style from './Skills.module.css'

import Button from '@material-ui/core/Button'
import {FiEdit} from 'react-icons/fi'
import {MdAdd} from 'react-icons/md'
import Skill from '../Skill/Skill'

class Skills extends Component{

    skills = [
        {name:'Spring Framework', score:'50'},
        {name:'React Js', score:'20'},
        {name:'Docker', score:'60'},
        {name:'Java', score:'80'},
        {name:'DataBase', score:'90'},
        {name:'Microservices', score:'60'}
    ]

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
                    {
                        this.skills.map((skill) => {
                            return <Skill name={skill.name} score={skill.score}/>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Skills;
