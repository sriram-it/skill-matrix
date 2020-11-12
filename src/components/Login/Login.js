import React, {Component} from 'react'
import './Login.css'
import img1 from "../../images/employee-vector.png"
import TextField  from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button'




class Login extends Component {
    render(){
        return(
            <div className = "login-container">
                <div className = "login-svg">
                    <img src = {img1}/>
                    <div className="login-svg-content">
                        <center>
                            <h2>Skill Matrix</h2>
                            <h5>Find the right people for the right project</h5>
                        </center>
                    </div>
                </div>

                <div className="login-form">
                   <div className="login-title-section">
                        <center>
                        <h2>Login</h2>
                        <h3>Welcome to Skill Matrix</h3>
                        </center>                
                    </div>
                    <div className="login-form-fields">
                        <div className="login-form-textField">
                            <TextField id="outlined-basic-1" label="username" variant="outlined"/>
                        </div>
                        <div className="login-form-textField">
                            <TextField id="password-field" label="password" type="password" variant="outlined"/>
                        </div>
                        <div className="login-form-button">
                            <Button variant="contained">Login</Button>
                        </div>
                        <div className="login-new-user">
                            New to Skill Matrix? <a href="/signup">create account</a>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Login;