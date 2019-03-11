
import React,{Fragment,PureComponent} from 'react';


class SearchResult extends PureComponent {
  render() {

const rows = 
this.props.data &&  this.props.data.status && this.props.data.data && this.props.data.data.length >0  ?
this.props.data.data.map(item=>{
 return ( <div className="row"><div className="col-md-12">
  <div className="media">
    <div className="media-left">
      
        <img height="10px" width="20px" className="img-fluid"  src={item.image_url} alt="..."/>
    
    </div>
    <div className="media-body">
      <h4 className="media-heading">{item.name}</h4>
      <p>{item.description}</p>
    </div>
  </div>
</div></div>)
}) :  <div> {this.props.data.message}</div>

    return (
        <Fragment>
    <div>
      <div>
        Page Num :{this.props.data.pageNum}
        <div><button disabled ={this.props.data.pageNum ===1 || this.props.data.pageNum ===0 } onClick={()=>this.props.handleOnNextClick(-1) }>Previous</button>
<button disabled ={!this.props.data.status }  onClick={()=>this.props.handleOnNextClick(1)}>Next</button>
</div>
    </div>
 {rows}
      
    
</div>

  </Fragment>)

}
}


export default SearchResult;