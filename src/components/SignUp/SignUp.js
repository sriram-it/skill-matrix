import React, {Component} from 'react'
import bannerImage from '../../images/signup-banner.png'
import img1 from "../../images/employee-vector.png"

import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Style from './SignUp.module.css'

class SignUp extends Component{
    render(){
        return(
            <div className = {Style.signupContainer}>
                <div className={Style.signupForm}>
                   <div className={Style.signupTitleSection}>
                        <center>
                        <h2>Sign Up</h2>
                        <h3>Welcome to Skill Matrix</h3>
                        </center>                
                    </div>
                    <div className={Style.signupFormFields}>
                        <div className={Style.signupFormTextField}>
                            <TextField id="outlined-basic-1" label="name" variant="outlined" size="small"/>
                        </div>
                        <div className={Style.signupFormTextField}>
                            <TextField id="outlined-basic-1" label="email" variant="outlined" size="small"/>
                        </div>
                        <div className={Style.signupFormTextField}>
                            <TextField id="password-field" label="password" type="password" variant="outlined" size="small"/>
                        </div>
                        <div className={Style.signupFormButton}>
                            <Button variant="contained">Sign Up</Button>
                        </div>
                        <div className={Style.signupNewUser}>
                            <a href="/">Already have an account?</a>
                        </div>
                    </div> 
                </div>

                <div className = {Style.signupSvg}>
                    <img src = {img1}/>
                    <div className={Style.signupSvgContent}>
                        <center>
                            <h2>Skill Matrix</h2>
                            <h5>Find the right people for the right project</h5>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;