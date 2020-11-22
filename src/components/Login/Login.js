import React, {Component} from 'react'
import Style from './Login.module.css'
import img1 from "../../images/employee-vector.png"
import TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'


class Login extends Component {
    render(){
        return(
            <div className = {Style.loginContainer}>
                <div className = {Style.loginSvg}>
                    <img src = {img1}/>
                    <div className={Style.loginSvgContent}>
                        <center>
                            <h2>Skill Matrix</h2>
                            <h5>Find the right people for the right project</h5>
                        </center>
                    </div>
                </div>

                <div className={Style.loginForm}>
                   <div className={Style.loginTitleSection}>
                        <center>
                        <h2>Login</h2>
                        <h3>Welcome to Skill Matrix</h3>
                        </center>                
                    </div>
                    <div className={Style.loginFormFields}>
                        <div className={Style.loginFormTextField}>
                            <TextField id="outlined-basic-1" label="username" variant="outlined"/>
                        </div>
                        <div className={Style.loginFormTextField}>
                            <TextField id="password-field" label="password" type="password" variant="outlined"/>
                        </div>
                        <div className={Style.loginFormButton}>
                            <Button variant="contained">Login</Button>
                        </div>
                        <div className={Style.loginNewUser}>
                            New to Skill Matrix? <a href="/signup">create account</a>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default Login;