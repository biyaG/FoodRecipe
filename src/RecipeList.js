import React, {Component} from 'react';
import Sender from './Sender';
import image from './pic1.jpg'
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';
import RecipeAdd from './RecipeAdd';
import './App.css';
import Navbar2 from './Navbar2';
import axios from 'axios';

export default class RecipeList extends Component{
   
    // componentWillMount(){
    //     this.getRecipes();
    //   }
    // getRecipes=()=>{
    //     const get={
    //         title:this.state.title,
    //         publisher:this.state.publisher,
    //         Ingredients:this.state.Ingredients,
    //         image_url:this.state.image_url,
    //     }
    //      // const fd = new FormData();
    //     // fd.append('image', this.state.selectedFile,this.state.selectedFile.name)
    //     // axios.post('',fd).then()
    //     axios.get('http://localhost:3000/api/FoodRecipes?access_token=' + localStorage.getItem('accessToken'))
    //     .then(response =>{
    //         console.log("adding");
    //         console.log(response);
    //     }).catch(err=> console.log(err));
    //      console.log("The form was submitted with following data:");
    //      // console.log(this.state);
    // }
    render(){
       
        const { recipes} = this.props;
        console.log(recipes);
        let image_url = './pic1'
        return(
            <React.Fragment>     
       <br/>
                <Navbar2/>
                <h1 className="title"><center>Recipe List</center></h1>
                <RecipeSearch recipes={recipes}/> 
              
                
                {
                    recipes.map(recipe =>{
                        
                        return(
                            <Recipe
                            key={recipe.recipe_id}
                            recipe_id= {recipe.recipe_id}
                            title ={recipe.title}
                            publisher={recipe.publisher}
                            image_url={recipe.image_url}
                            />
                        )
                })
            }
                
            
                </React.Fragment>
              
        )
    }
}
