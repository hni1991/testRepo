import React ,{Component} from 'react';
import './Register.css'

class Register extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="registerArea col-lg-6 col-sm-12">
                  <div className="card card-signin my-5 mx-auto loginForm" id="registerForm">
                        <div className="card-body">
                            <h5 className="card-title text-center">Signup</h5>
                            <form className="form-signin">
                                <div className="row">
                                    <div className="form-label-group col-6">
                                        <input type="text" id="firstName" className="form-control inptBorder" placeholder="First Name *"
                                            required autofocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="text" id="lastName" className="form-control inptBorder" placeholder="Last Name *"
                                            required autofocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <select className="custom-select inptBorder" id="gender">
                                            <option selected>Gender</option>
                                            <option value="1">Female</option>
                                            <option value="2">Male</option>
                                        </select>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="email" id="inputEmail" className="form-control inptBorder"
                                            placeholder="Email address *" required autofocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="password" id="inputPassword" className="form-control inptBorder"
                                            placeholder="Password *" required autofocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="text" id="city" className="form-control inptBorder" disabled="true" placeholder="Hamburg" required
                                            autofocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="number" id="phoneNumber" className="form-control inptBorder"
                                            placeholder="phoneNumber" required autofocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <select className="custom-select inptBorder" id="cityArea" required autofocus>
                                            <option selected>Choose your Area *</option>
                                            <option value="1">Hamburg-Mitte</option>
                                            <option value="2">Altona</option>
                                            <option value="3">Eimsbüttel</option>
                                            <option value="4">Hamburg-Nord</option>
                                            <option value="5">Wandsbek</option>
                                            <option value="6">Bergedorf</option>
                                            <option value="7">Harburg</option>
                                        </select>
                                    </div>
                                 
                                  
                                        <div className="form-label-group col-6">
                                        <input type="text" id="Street" className="form-control inptBorder"
                                            placeholder="Street"/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="number" id="houseNumber" className="form-control inptBorder"
                                            placeholder="House Number"/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="number" id="plz" className="form-control inptBorder"
                                            placeholder="PLZ"/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input inptBorder" id="inputImage"
                                                aria-describedby="inputGroupFileAddon04"/>
                                            <label className="custom-file-label inptBorder" for="inputGroupFile04">Your Image</label>
                                        </div>
                                    </div>
                                </div>
                                <br/>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input"/>
                                    <label className="custom-control-label" for="customCheck1">Remember password</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase btnColor"
                                    type="submit">Signup</button>
                                <hr className="my-4"/>
                            </form>
                            <span>Have you already an account ?</span>
                            <span><a onclick="loginBtn()" href="#"> Sign In</a> here</span>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Register;