import React from 'react'
import Info from './Info'
import Poster from './Poster'


function Movie(props) {

    return (
            <div className='poster-list'>            
                <Poster image={props.movie.image} />
                <Info director={props.movie.director} title={props.movie.title} />

            </div>        )
    }

export default Movie
