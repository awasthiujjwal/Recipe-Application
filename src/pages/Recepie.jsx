import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
const Recepie = () => {
 let location = useLocation ();
 console.log (location.state.recipe)
  return (
    
      <div className="  "  style={{width: '18rem'}}>
  <img src={location.state.recipe.image}  /> 
  <div className="card-body">
    <h5 className="card-title">{location.state.recipe.label}</h5> <br />
    <p className="card-text"> <b>Calories-</b> {location.state.recipe.calories}</p>
    <p className="card-text">  <b>Cuisinetype</b> {location.state.recipe.cuisineType}</p>
    <Link to={location.state.recipe.url} className="btn btn-secondary">HOW TO COOK</Link>
{/*     
  </div>
  <div className="card"  style={{width: '18rem'}}>
  <img src={"https://www.allrecipes.com/thmb/2wZD8aT9M7aq5yPZYTa76hUOdfY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/257198-thin-crust-pizza-ddmfs-hero-3x4-1090-2d4a9a4b7195425d922cbcd298d152ec.jpg"} className="card-img-top"  />
  <h5 className="card-title">{location.state.recipe.mealType}</h5>
  <h5 className="card-title">{location.state.recipe.dietLabels}</h5>
  <p className="card-text">Some qu</p> */}
    
 
</div>

</div>

       



  )
}

export default Recepie
