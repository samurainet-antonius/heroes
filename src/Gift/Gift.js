import React from 'react'
import './style.css'

const Gift = (props) => {
    return (
        <div className="card">
            <img src={props.gifs.images.fixed_height.url} alt={props.gifs.content_url}/>
        </div>
    )
}

export default Gift