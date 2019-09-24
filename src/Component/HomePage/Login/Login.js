import React ,{Component} from 'react';
import './Login.css'

class Login extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="loginArea col-lg-6 col-sm-12">
                 <div className="card card-signin my-5 loginForms">
                        <div className="card-body formArea mx-auto col-8">
                            <h5 className="card-title text-center">Sign in</h5>
                            <form className="form-signin">
                                <div className="form-label-group">
                                    <label for="inputEmail">Email address</label>
                                    <input type="email" id="loginEmail" className="form-control inptBorder" placeholder="Email address"
                                        required autoFocus/>
                                </div><br/>
                                <div className="form-label-group">
                                    <label for="inputPassword">Password</label>
                                    <input type="password" id="loginPassword" className="form-control inptBorder"
                                        placeholder="Password" required/>
                                </div>
                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase btnColor" type="submit">Sign
                                    in</button>
                                <hr className="my-4"/>
                            </form>
                            <span>Don't have an account ?</span>
                            <span onClick={this.props.cl}><a >signup</a> here </span>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Login;