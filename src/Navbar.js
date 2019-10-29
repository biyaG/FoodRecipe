import React, {Component} from 'react';
import image from './food.jpg'
import './App.css'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';



class Navbar extends Component{
    render(){
        return(
        <div className="App">
            <div className="navbar"> 
                <ul>
                    <li className='name'>FoodRecipe App</li>
                   
                    <div>
                    <li style={{float:"right"}}><Link to='/' className="active" href='#'>Sign In</Link></li> 
                    <li style={{float:"right"}}><Link to='/signup'  href='#'>Sign up</Link></li>
                    </div>
                  
                 </ul>
            </div>
            
            <img src={image} style={{width:'100%', height:'50%'}} />
        
        </div>
        )
    }
}

export default Navbar;