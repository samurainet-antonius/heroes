import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

const Home = (props) => {
    return (
        <div className="Home">
            <h2 className="text-center">
              WELCOME TO YOUR GIPHY 
            </h2>
            <div className="img-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Giphy-logo.svg/2500px-Giphy-logo.svg.png" alt="logo Giphy"/>
            </div>
            <div className="menu">
              <Link to="/gifs/ironman">IRON MAN GIPHY</Link>
              <br/>
              <Link to={{
                pathname:'/gifs/search',
                state:{
                  name:'search'
                }
              }}>SEARCH YOU GIPHY</Link>
            </div>
        </div>
      )
}

export default Home