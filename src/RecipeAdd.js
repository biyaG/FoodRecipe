import React, { Component } from 'react';
import {recipe} from './tempDetails';
import './App.css';
import {recipes} from './tempList';
import Navbar2 from './Navbar2';
import axios from 'axios';

class RecipeAdd extends Component {
    constructor(props){
        super(props);
       this.state={
            recipe:recipe,
            title:"",
            publisher:"",
            Ingredients:"",
            type:"",
            selectedFile:null,
            token: localStorage.getItem('accessToken')
        }
    
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const add={
            title:this.state.title,
            publisher:this.state.publisher,
            Ingredients:this.state.Ingredients,
        }
         // const fd = new FormData();
        // fd.append('image', this.state.selectedFile,this.state.selectedFile.name)
        // axios.post('',fd).then()
        axios.post('http://localhost:3000/api/FoodRecipes?access_token=' + localStorage.getItem('accessToken'), add)
        .then(response =>{
            console.log("adding");
            console.log(response);
        }).catch(err=> console.log(err)); 
    }
    fileSelectedHandler = event =>{
        this.setState({
            selectedFile:event.target.files[0]
        })
    }
    fileUploadHandler = () => {
        // const fd = new FormData();
        // fd.append('image', this.state.selectedFile,this.state.selectedFile.name)
        // axios.post('',fd).then()
    }
    render(){
        const{image_url,publisher,title,ingredients}=this.state.recipe;
        return(
          <div>
            <Navbar2/>
            <div className="container-4">
            <br/>
            <br/>
               <form onSubmit={this.handleSubmit}>
                <input type="text"
                 name = "title"
                 value={this.state.text}
                 onChange={this.handleChange} 
                 placeholder="Enter your title here"/>
                 <br/>
                <input type="text"
                 name = "publisher"
                 value={this.state.text}
                 onChange={this.handleChange} 
                 placeholder="Publisher"/>
                 <br/>
                 <form>
                <select className="food" name="foodtype">
                    <option name ="type" onChange={this.handleChange}>BreakFast</option>
                    <option name="type" onChange={this.handleChange}> Lunch</option>
                    <option name="type" onChange={this.handleChange}>Dinner</option>
                </select>
                </form>
                 <textarea name="Ingredients" placeholder="Ingredients" value={this.state.text}
                 onChange={this.handleChange} ></textarea>
                 <br/>
                 <input style={{display:'none'}} type="file" className='file' 
                 onChange={this.fileSelectedHandler}
                 ref={fileInput=>this.fileInput = fileInput}/>
                 <div className="Addbuttons">
                 <button onClick={()=>this.fileInput.click()}>ChooseFile</button>
                 <button className="upload" onClick={this.fileUploadHandler}>upload</button>
                 <button onClick={this.handleSubmit}>Submit</button>
                 </div>
            </form>
                </div>
                </div>
        );
    }
    
}
export default RecipeAdd;