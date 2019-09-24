import React ,{Component} from 'react';
import './Register.css'
//import {Fetch1} from '../../../Fetch/Fetch'
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
                            <form onSubmit={this.handleForm} className="form-signin">
                                <div className="row">
                                    <div className="form-label-group col-6">
                                        <input type="text" ref={(ref) => this.firstName = ref} id="firstName" className="form-control inptBorder" placeholder="First Name *"
                                            required autoFocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="text" id="lastName" ref={(ref) => this.lastName = ref} className="form-control inptBorder" placeholder="Last Name *"
                                            required autoFocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <select className="custom-select inptBorder" ref={(ref) => this.gender = ref} id="gender">
                                            <option selected>Gender</option>
                                            <option value="1">Female</option>
                                            <option value="2">Male</option>
                                        </select>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="email" id="inputEmail" ref={(ref) => this.inputEmail = ref} className="form-control inptBorder"
                                            placeholder="Email address *" required autoFocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="password" id="inputPassword" ref={(ref) => this.inputPassword = ref} className="form-control inptBorder"
                                            placeholder="Password *" required autoFocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="text" id="city" className="form-control inptBorder" disabled="true" placeholder="Hamburg" required
                                            autoFocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="number" id="phoneNumber" ref={(ref) => this.phoneNumber = ref} className="form-control inptBorder"
                                            placeholder="phoneNumber" required autoFocus/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <select className="custom-select inptBorder" ref={(ref) => this.cityArea = ref} id="cityArea" required autoFocus>
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
                                        <input type="text" id="Street" ref={(ref) => this.street = ref} className="form-control inptBorder"
                                            placeholder="Street"/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="number" id="houseNumber" ref={(ref) => this.houseNumber = ref} className="form-control inptBorder"
                                            placeholder="House Number"/>
                                    </div>
                                    <div className="form-label-group col-6">
                                        <input type="number" id="plz" ref={(ref) => this.plz = ref} className="form-control inptBorder"
                                            placeholder="PLZ"/>
                                    </div>
                                 
                                </div>
                                <br/>

                                <div className="custom-control custom-checkbox mb-3">
                                    <input type="checkbox" className="custom-control-input"/>
                                    <label className="custom-control-label" >Remember password</label>
                                </div>
                                <button className="btn btn-lg btn-primary btn-block text-uppercase btnColor"
                                    type="submit" >Signup</button>
                                <hr className="my-4"/>
                            </form>
                            <span>Have you already an account ?</span>
                            <span><a onClick={this.props.cl} > Sign In</a> here</span>
                        </div>
                    </div>
            </div>
        )
    }
    handleForm = (e)=>{
        e.preventDefault();
        console.log('register start')
          
            let regdata = {
                firstName:this.firstName.value,
                lastName:this.lastName.value,
                email:this.inputEmail.value,
                password:this.inputPassword.value,
                gender:this.gender.value,
                area:this.cityArea.value
            }

            function Fetch1(url,data) {
                return fetch(url, {
                    method: "POST", //GET,PUT,DELETE,etc
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                  }).then(response => {
                    return response.json();
                  }); 
                
            }
            Fetch1('http://benearme.mojtabazargar.com/register',regdata).then((data)=>{
                console.log(data)
    
            }).catch((error)=>console.log(error))
        }
}

export default Register;