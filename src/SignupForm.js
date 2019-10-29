import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar'
import axios from 'axios';
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';


class SignupForm extends Component{
    constructor(){
        super();

        this.state={
            name:"",
            email:"",
            password:"",
            redirect:false
        }
    }

    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const signuser={
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:3000/api/Users',signuser)
        .then(response =>{
            console.log(response);
        })
         console.log("The form was submitted with following data:");
         // console.log(this.state);
       
    }

render(){
    return(
    <div className="signupForm">
    <Navbar/>
    <div className="form">
    <br/><br/>

    <b>UserName:</b>
    <br/>
      <input type="text" 
      placeholder="UserName"
      name="name"  
       value={this.state.name}
       onChange={this.handleChange}
      />
        <br/>
      <b> Email: </b>
      <br/>
      <input type="email"
       placeholder="Email" 
       name="email"
        value={this.state.email}
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
        
      <button onClick={this.handleSubmit} className="signUp"><Link to="/">SignUp</Link></button>
      
        </div>

        <div className="quote">
        <h1>To eat is a necessity, but to eat intelligently is an art.</h1>
        </div>
      </div>
        );
}
}

export default SignupForm;