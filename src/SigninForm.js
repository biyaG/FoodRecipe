import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar'
import axios from 'axios';
// import Recipe from './Recipe'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';

class SigninForm extends Component{
    constructor(){
        super();

        this.state={
            email:"",
            password:"",
            token:localStorage.getItem('accessToken')
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const authuser={
            email:this.state.email,
            password:this.state.password
        }
       axios.post('http://localhost:3000/api/Users/login',authuser )
       .then(response =>{
           console.log(response.data.id);
           this.token = response.data.id;
         
           localStorage.setItem('accessToken',this.token);
       })
        console.log("The form was submitted with following data:");
        // console.log(this.state);
       
    }
render(){
    return(
    <div className="signupForm">
    <Navbar/>
    <div className="form">
    <h2>Log-In</h2>
    <b>Email:</b>
    <br/>
      <input type="text" 
      placeholder="UserName"
      name="email"  
      value={this.state.name}
      onChange={this.handleChange}
      />

      <br/>
      <b> Password: </b>
      <br/>
      <input type="password"
       placeholder="Password" 
       name="password"
        value={this.state.password}
        onChange={this.handleChange}
        />
        <br/>
        <button onClick={this.handleSubmit} className="login"><Link to='/Add'>Login</Link></button>
        </div>

        <div className="quote">
        <h1>To eat is a necessity, but to eat intelligently is an art.</h1>
        </div>
       
      </div>
        );
}
}

export default SigninForm;