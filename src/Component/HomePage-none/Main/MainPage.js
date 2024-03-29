import React ,{Component} from 'react';
import Login from '../Login/Login'
import Register from '../Register/Register'
import LeftSide from '../LeftSide/LeftSide'
import './MainPage.css'

class MainPage extends Component{
   
    render(){
        return(
            <div className="main container-fluid">
            <div class="row">
            <div className="d-flex align-content-start flex-wrap">
                <LeftSide/>
                <Login className="loginArea"/>
                <Register className="loginArea"/>
            </div>
            </div>
            </div>
        )
    }
}

export default MainPage;