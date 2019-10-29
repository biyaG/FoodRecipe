import React, { Component } from 'react';
import axios from 'axios';
import image from './pic1.jpg'
import image1 from "./food.jpg";
import SignupForm from './SignupForm';
import image2 from './food4.jpg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import {recipes} from './tempList';
import RecipeDetails from './RecipeDetails';
import RecipeSearch from './RecipeSearch';
import Recipe from './Recipe';
import RecipeList from './RecipeList';
import './App.css';
import SigninForm from './SigninForm';

class Sender extends Component {
 
  state = {
    response:[]
    };

    getRecipes=()=>{
      const get={
          title:this.state.title,
          publisher:this.state.publisher,
          Ingredients:this.state.Ingredients,
          image_url:this.state.image_url,
      }
       // const fd = new FormData();
      // fd.append('image', this.state.selectedFile,this.state.selectedFile.name)
      // axios.post('',fd).then()
      axios.get('http://localhost:3000/api/FoodRecipes?access_token=' + localStorage.getItem('accessToken'))
      .then(response =>{
          console.log("adding");
          console.log(response.data);
          this.setState({
            response:response.data
          })
          
      }).catch(err=> console.log(err));
       console.log("The form was submitted with following data:");
       // console.log(this.state);
  }
  componentWillMount(){
    this.getRecipes();
  }

  render() {
    console.log(recipes);
    return (
      <React.Fragment>

    {/* <RecipeList recipes={this.state.recipes}/> */}
    <RecipeList recipes={this.state.response}/>  
     
                }
        </React.Fragment>
    );
  
}
}
export default Sender;
