import React ,{Component} from 'react';
import Login from '../Login/Login'
import Register from '../Register/Register'
import LeftSide from '../LeftSide/LeftSide'
import './MainPage.css'

class MainPage extends Component{
   constructor(param){
       super(param)
       this.state={
           rightside:'login'
       }
   }

   template(){
       if(this.state.rightside ==='login'){
           return <Login cl={()=>{this.setState({rightside:'register'})
        console.log('clicked')
        }} className="loginArea"/>
       }else{
           return <Register cl={()=>this.setState({rightside:'login'})} className="loginArea"/>
       }
   }
    render(){
        return(
            <div className="main container-fluid">
            <div className="row">
            <div className="d-flex align-content-start flex-wrap">
                <LeftSide/>
                {this.template()}
            </div>
            </div>
            </div>
        )
    }
}

export default MainPage;