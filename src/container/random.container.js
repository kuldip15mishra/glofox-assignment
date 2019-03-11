import React, { Component, PropTypes } from 'react';
import RandomBeer from '../components/beer.component'
import HttpClient from "../services/api.service";
import {apiURL} from '../constant';
// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class RandomContainer extends Component {

    state={
        randombeerList :{}
    }
    componentDidMount(){
        this.fetchRandomBeer();
    }
  fetchRandomBeer=()=>{
    const httpClient = new HttpClient();
    return httpClient.get(apiURL.RANDOM_BEER_END_POINT)
    .then(response => {
        if(response && response.data && response.data.length >0){
            return  this.mapToModel(response.data[0]);
        }
      
    })
    .catch(error => {
     
      console.log(error);
    });
  }  
  fetchNonAlcoholicRandomBeer=()=>{
    const httpClient = new HttpClient();
    return httpClient.get(apiURL.RANDOM_BEER_END_POINT +'?abv_lt=6')
    .then(response => {
        if(response && response.data && response.data.length >0){
            return  this.mapToModel(response.data[0]);
        }
      
    })
    .catch(error => {
     
      console.log(error);
    });
  }
  mapToModel=(data)=>{
    return this.setState({randombeerList :{
        name :data.name,
        description :data.description,
        imageUrl :data.image_url
    }});
  }
  render() {
    return (
      <div className="container">
      <div className="row">
           <div className="col-sm-12"><RandomBeer 
           currentRandomBeer = {this.state.randombeerList}
           fetchNonAlcoholicRandomBeer={this.fetchNonAlcoholicRandomBeer}
           fetchRandomBeer={this.fetchRandomBeer}
           /></div>
          
           </div>
      </div>
    );
  }
}


export default RandomContainer;