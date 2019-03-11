
import React from 'react';
import { Link } from 'react-router';

// Home page component. This serves as the welcome page with link to the library
const RadioButton = (props) => (
<form>
    <label class="radio-inline">
      <input type="radio" name="optradio" checked
      
      onChange={()=> props.setSearchCriteria( 'name')}
      checked={props.radiooption === 'name'} 
      />by name
    </label>
    <label class="radio-inline">
      <input type="radio" name="optradio"
    
      onChange={()=> props.setSearchCriteria('description')}
      checked={props.radiooption === 'description'} 
      />by description
    </label>
  </form>
);

export default RadioButton;