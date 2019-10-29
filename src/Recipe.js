import React, {Component} from 'react';
import './App.css';
import image1 from "./food.jpg";
import axios from 'axios';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import RecipeAdd from './RecipeAdd';
import RecipeDetails from './RecipeDetails';
export default class Recipe extends Component{
    render(){
        const {
            recipe_id,
            image_url,
            publisher,
            title ,
            ingredients   
        } = this.props;
        //console.log(recipe_id);
        //const{handleDetails} = this.props;
        console.log(image_url);
       
       
        return(
            <React.Fragment>

                <div className="container">
                <div className="box">
                    <img src= {require("./food"+".jpg")}
                     className="img" 
                    style={{height:"14rem"}} 
                    alt="recipe"/>
                    {/* <img src = {image1}className="img" 
                    style={{height:"14rem"}}></img> */}
                    
                    <div className="desc">
                    <h6>{title}</h6>
                    <h6>Provided by: {publisher}</h6>
                    </div>
                    <button type="button" className="btndetails">
                        <Link to="/Details">Details</Link></button>
                    </div>
                   {/* <div>{ingredients}</div> */}
                  
                    </div>
                    
            </React.Fragment>
              
        )
    }
}
