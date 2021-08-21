import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import './style.css';
import Gift from '../Gift/Gift';
import SearchBox from '../SearchBox/SearchBox';

class GifsList extends React.Component{
    constructor(props){
        console.log(props);
        super();
        this.state = {
          gifs : [],
          searchField:'',
          menu:props.match.params.search
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
        
        console.log(this.state.menu);
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
          const menu = this.state.menu;
          let title = 'IRON MAN GIPHY';
          let link = '';
          if(menu === 'search'){
            title = 'SEARCH YOUR GIPHY';
            link = <SearchBox placeholder="Search input goes here ..." handleChange={(e) => this.onChangeHandler(e)}/>
          }
          return(

            <div>
                <div className="text-head">
                    
                    <h1>{title}</h1>
                    <br/>
                    {link}
                    <Link to="/">Kembali</Link>
                </div>
                <div className="cards">
                    {
                    this.state.gifs.map(gif => (
                        <Gift key={gif.id} gifs = {gif}/>
                    ))
                    }

                    </div>
            </div>
          )
      }
}

export default GifsList;