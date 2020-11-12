import React, {Component} from 'react'
import bannerImage from '../../images/signup-banner.png'
import img1 from "../../images/employee-vector.png"

import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import './SignUp.css'

class SignUp extends Component{
    render(){
        return(
            <div className = "signup-container">
                <div className="signup-form">
                   <div className="signup-title-section">
                        <center>
                        <h2>Sign Up</h2>
                        <h3>Welcome to Skill Matrix</h3>
                        </center>                
                    </div>
                    <div className="signup-form-fields">
                        <div className="signup-form-textField">
                            <TextField id="outlined-basic-1" label="name" variant="outlined" size="small"/>
                        </div>
                        <div className="signup-form-textField">
                            <TextField id="outlined-basic-1" label="email" variant="outlined" size="small"/>
                        </div>
                        <div className="signup-form-textField">
                            <TextField id="password-field" label="password" type="password" variant="outlined" size="small"/>
                        </div>
                        <div className="signup-form-button">
                            <Button variant="contained">Sign Up</Button>
                        </div>
                        <div className="signup-new-user">
                            <a href="/">Already have an account?</a>
                        </div>
                    </div> 
                </div>

                <div className = "signup-svg">
                    <img src = {img1}/>
                    <div className="signup-svg-content">
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