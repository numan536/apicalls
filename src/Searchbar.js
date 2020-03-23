import React from 'react';
import axios from 'axios';

class Searchbar extends React.Component{
  
  
//    onClickTo =()=>{
//        this.setState({
//            term: this.state.onSearchSubmit
//        })
//    }
    
    render(){
        return(
            <div>
                <input value={this.props.term} onChange={this.props.handleChange} />
                <button onClick={this.props.onSubmit}>Submit</button>
                
            </div>
        )
    }
    
}


export default Searchbar;