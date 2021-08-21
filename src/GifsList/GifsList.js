import React from 'react';
import './style.css';
import Gift from '../Gift/Gift';
const GifsList = (props) =>{
    return(
        <div className="cards">
            {
                props.gifs.map(gif => (
                    <Gift key={gif.id} gifs = {gif}/>
                ))
            }
        </div>
    )
}

export default GifsList;