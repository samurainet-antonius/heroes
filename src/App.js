import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import GifsList from './GifsList/GifsList';
import Home from './Home/Home'


class App extends React.Component{
  
  render(){
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/gifs/ironman" exact component={GifsList}/>
            <Route path="/gifs/:search" exact component={GifsList}/>
            {/* <Route path="/gifs/search" exact component={SearchBox}/> */}
            {/* <div className="App"> */}
              {/* <h1 className="text-center">Iron Man Giphy</h1> */}
              {/* <SearchBox placeholder="Search input goes here ..." handleChange={(e) => this.onChangeHandler(e)}/> */}
              {/* <GifsList gifs = {this.state.gifs}/> */}
            {/* </div> */}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;