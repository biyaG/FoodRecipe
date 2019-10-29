import React, {Component} from 'react';

import './App.css'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom';



class Navbar3 extends Component{
    render(){
        return(
        
            <div className="navbar3"> 
                <ul>
                    <li className='name'>FoodRecipe App</li>
                   
                    <div>
                    <li style={{float:"right"}}><Link to='/'  href='#'>Logout</Link></li>
                    <li style={{float:"right"}}><Link to='/Recipe' className="active" href='#'>Recipe</Link></li> 
                    <li style={{float:"right"}}><Link to='#'  href='#'>Contact</Link></li> 
                    <li style={{float:"right"}}><Link to='/'href='#'>Home</Link></li> 
                    
                    
                    
                    </div>
                  
                 </ul>
            </div>
        )
        }
}

export default Navbar3;