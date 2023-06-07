import React from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
    console.log(movie.show.id);
    return (
        <div>
            <article className='portfolio__item  w-36'>
                   <div className="portfolio__item-image ">
                        <img className="img-Style" src={movie.show.image.medium}/>
                   </div>
                   <h3> Name : {movie.show.name}</h3>
                   <h3>Language : {movie.show.language}</h3>
                   <h3> Rating : {movie.show.rating.average ? movie.show.rating.average : 0}</h3>
                   
                   <div className="portfolio__item-cta linkStyle">
                   <span className='btn btn-primary'><Link to={`/movie/${movie.show.id}`} >Details</Link></span>
                   </div>
                </article>
        </div>
    );
};

export default MovieCard;