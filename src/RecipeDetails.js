import React, {Component} from 'react';
import image from './pic1.jpg'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import {recipe} from './tempDetails';
import RecipeAdd from './RecipeAdd';
import './App.css';

export default class RecipeDetails extends Component{
    constructor(props){
        super(props)
        this.state={
            recipe:recipe,
            url:(this.props.id)
        }
    }
    render(){
        const{image_url,publisher,title,ingredients}=this.state.recipe;
        const{handleIndex} = this.props
        console.log(image_url);
        return(
            <React.Fragment>
                <div className="container-3">
                <button type="button" className="back"> <Link to='/Recipe'>Back to recipe List</Link></button>
                <div className="image">
                    <img src= {require(image_url+".jpg")} className="img" alt="recipe" style={{height:"14rem"}}/>
                    <button type="button" className="Delete"><Link to='/Recipe'>Delete</Link></button>
                    </div>
                    {/* <h1>{image_url}</h1> */}
                {/* <view>{image_url}</view> */}
                </div>
                <div className="description">
                    <h6>{title}</h6>
                    <h6>provided by {publisher}</h6>
                    <h6>Ingredients: {ingredients}</h6>

                </div>
                </React.Fragment>
              
        )
    }
}
