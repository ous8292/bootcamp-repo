import React from 'react'

function Poster(props) {
    console.log(props)

    return (
        <div className="poster-card-image">
                <img src= {props.image} alt="poster"></img>
        </div>
    )
}

export default Poster
