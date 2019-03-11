
import React,{Fragment} from 'react';
import { Link } from 'react-router';

// Home page component. This serves as the welcome page with link to the library
const RandomBeer = (props) => {

 return (
  <Fragment>
    <div className="container">
  <div className="row">
    <div className="col-12">
    <div className="row">
    <div className="col-8">
    
    <div className="card">
     <div className="card-body">
      <h5 className="card-title">{props.currentRandomBeer.name}</h5>
      <img  height="20px" width="50px" className="img-fluid" src={props.currentRandomBeer.imageUrl} alt="Card image cap"/>
   
      <p className="card-text">{props.currentRandomBeer.description}</p>
    </div>
  </div>


    </div>
    <div className="col-2">
    <button type="submit" className="btn btn-primary" 
  
    onClick={props.fetchRandomBeer}
    >Another Beer</button>
    </div>
    <div className="col-2">
    <button type="submit" className="btn btn-primary"
     onClick={props.fetchNonAlcoholicRandomBeer}
    >Random Non Alcoholic Beer</button>
    </div>
    </div>
    </div>
   
  </div>
</div>
    </Fragment>)

}


export default RandomBeer;