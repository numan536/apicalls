import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import Searchbar from './Searchbar';
import './App.css';
import ImageList from './ImageList'

class App extends React.Component{
  state={data:[] ,  
    term: ""
  }

  handleChange=(event)=>{
    this.setState({
      name: event.target.value
    })

    console.log(this.state.term)
}
onClickTo =()=>{
  this.setState({
      term: this.state.onSearchSubmit
  })
}



   onSearchSubmit = async ()=>{
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params:{
        query: 'cars',
        client_id:'0CGTS9Grt3NddfiDUdK8_Ea9e2aZoiZ4ZT3BKaKim_Y'
      },
    // headers:{
    //   Authorization : '0CGTS9Grt3NddfiDUdK8_Ea9e2aZoiZ4ZT3BKaKim_Y'
    // }
    })
    this.setState({
      data: response.data.results
    })
   
  }
  render(){
    
    return(
      <div>
        <Searchbar term={this.state.term} onSubmit={this.onSearchSubmit} handleChange={this.handleChange} />
        <hr />
        <ImageList data={this.state.data} />
      </div>
    )
  }
}

export default App;
