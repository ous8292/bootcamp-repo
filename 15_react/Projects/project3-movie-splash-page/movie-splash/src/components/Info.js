import React from 'react'

function Info(props) {
    return (
        <div className="poster-card-content">
            <h1 className='poster-title'>Title: {props.title}</h1>
            <p>Director: {props.director}</p>

        </div>
    )
}

export default Info
