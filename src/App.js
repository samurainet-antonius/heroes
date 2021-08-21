import React from 'react';
import './App.css';
import axios from 'axios';
import GifsList from './GifsList/GifsList';
import SearchBox from './SearchBox/SearchBox';

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      gifs : [],
      searchField:''
    }
  }

  getGiph(){
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=Dni5vIeufdwumi2VvE2Ol9INSadYwIWy&q=ironman&limit=9&offset=1&rating=g&lang=en')
          .then(response =>{
            const gifs = response.data.data;
            this.setState({gifs})
          }).catch(error =>{

          })
  }

  async componentDidMount(){
    
    this.getGiph()
  }

  search = async val => {
    if(val.length === 0){
      alert('Keyword seacrh not empty!');
      this.getGiph()
    }else{
      axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Dni5vIeufdwumi2VvE2Ol9INSadYwIWy&q=${val}&limit=9`)
      .then(response =>{
        const gifs = response.data.data;
        this.setState({gifs})
      }).catch(error =>{

      })
    } 
  }

  onChangeHandler = async e =>{
    this.search(e.target.value)
    this.setState({searchField:e.target.value})
  }
  
  render(){
    return (
        <div className="App">
          <h1 className="text-center">Iron Man Giphy</h1>
          <SearchBox placeholder="Search input goes here ..." handleChange={(e) => this.onChangeHandler(e)}/>
          <GifsList gifs = {this.state.gifs}/>
        </div>
    );
  }
}

export default App;