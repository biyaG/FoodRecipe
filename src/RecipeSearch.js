
import React, {Component} from 'react';

export default class RecipeDetails extends Component{
    render(){
        const{recipes,value,handleSubmit,handleChange}= this.props
        console.log(value);
        // for(var i = 0; i < recipes.length;i++){
        //     console.log(recipes[i]);

        // }
        
        // if(value===recipes){
        //     console.log(recipes);
        // }
        return(
            <React.Fragment>
                <div className="container-5">
                <center>
  <input type="text" name="search" placeholder="Search.." value={value} 
  onChange={handleChange}/>
  <button onClick={handleSubmit}>Search</button></center>
  <div className='type'>
  <a href="#" target="_blank">Break-Fast</a>
  <a href="#" target="_blank">Lunch</a>
  <a href="#" target="_blank">Dinner</a>
  </div>
</div>
                </React.Fragment>
              
        )
    }
}
