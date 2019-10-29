import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Sender from './Sender';
import RecipeList from './RecipeList';
import SignupForm from './SignupForm';
import SigninForm from './SigninForm';
import Recipe from './Recipe'
import RecipeDetails from './RecipeDetails'
 import RecipeAdd from './RecipeAdd'



class Main extends Component{
    render(){
        return(
        <Router>
            <div>
            <Route exact path='/' component={SigninForm}/>
            <Route exact path='/signup' component={SignupForm}/>
            <Route exact path='/Recipe' component={Sender}/>
            <Route exact path='/Details' component={RecipeDetails}/>
            <Route exact path='/Add' component={RecipeAdd}/>
            </div>
            </Router>
        )
    }
       
}

export default Main;
