
import React from 'react';
import { Link } from 'react-router';

// Home page component. This serves as the welcome page with link to the library
const SearchInput = (props) => (
   
    <div className="row">
    <div className="col-6">
        <input 
       
     
    onChange={(event) => { event.persist();
        props.handleOnChange(event)}}

        type="textarea" name="text" 
        id="exampleText"  placeholder="Search"/>
        </div>
        <div className="col-6">
        <button className="btn btn-primary" onClick={(event) => { event.persist();
            props.handleOnSearch(event)}}>Search</button>
        </div>
    </div>
    
);

export default SearchInput;