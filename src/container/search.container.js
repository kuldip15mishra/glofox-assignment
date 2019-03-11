import React, { Component, PropTypes } from 'react';
import SearchInput from '../components/searchbox.component'
import RadioButton from '../components/radiobutton.component';
import HttpClient from "../services/api.service";
import {PageConfiguration,apiURL,SearchType} from '../constant';
//import { throttle, debounce } from 'throttle-debounce';
import SearchResult from '../components/list.component';
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this, args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
class SearchContainer extends Component {
  state={
    isSearchByName :true,
    searchParam :SearchType["name"],
    radio_option :"name",
    searchResult :[],
    currentPageNum :1,
    currentQuery:""
  }

  

  handleOnNextClick=(page)=>{
    let currentPageToFetch= this.state.currentPageNum;
    this.setState({currentPageNum : (currentPageToFetch +page)},()=>{
      this.fetchBeers(this.state.currentQuery,this.state.currentPageNum);
    })
   
  }
  SearchBeers=  debounce(() => {
    if(this.state.currentQuery && this.state.currentQuery.length >0)
    {
      this.setState({currentPageNum :1},
        ()=>{
          this.fetchBeers(this.state.currentQuery,this.state.currentPageNum);
        }) 
     
    
  }
    else{
      this.setState({searchResult :[],currentQuery :"" ,currentPageNum :1});
    }
  }  , 500)

  fetchBeers=(params,pageNum=1)=>{
    const httpClient = new HttpClient();
   
    return httpClient.get(`${apiURL.BEER_END_POINT}?${this.state.searchParam}=${params}&per_page=${PageConfiguration.perPage}&page=${pageNum}`)
    .then(response => {
        if(response && response.data && response.data.length >0){
            this.mapToModel(response.data,"No Data Found",true,null);
        }else{
          this.mapToModel([],"No Data Found",false,null);
        }
      
    })
    .catch(error => {
     
     this.mapToModel([],"Error",false,error);
    })
  }

  handleOnChange=(event)=>{
    this.setState({
      currentQuery :event.target.value
    })
  }
  setSearchCriteria=(type)=>{
    switch(type){
        case 'name':{
          this.setState({searchParam:SearchType[type],radio_option:type });
          return;
        }
        case 'description':{
          this.setState({searchParam:SearchType[type] ,radio_option:type});
          return;
        }
        default : {
          return
        }
    }
       
  }

  mapToModel=(response,msg,status,err)=>{
    this.setState({searchResult :{
      data :response,
      status :status,
      error :err,
      message :msg,
      pageNum : this.state.currentPageNum
    }});
  }

  render() {
    return (
      <div className="container">
      <div className="row">
           <div className="col-sm-6"><SearchInput
           handleOnSearch={this.SearchBeers}
           handleOnChange={this.handleOnChange}
           /></div>
           <div className="col-sm-6"><RadioButton 
           setSearchCriteria={this.setSearchCriteria}
           radiooption ={this.state.radio_option}
           /></div>
           </div>
           <div className="row">
              <div className="col-12">
              <SearchResult data={this.state.searchResult} 
              handleOnNextClick={this.handleOnNextClick}
              />
              </div>
           </div>
      </div>
    );
  }
}


export default SearchContainer;