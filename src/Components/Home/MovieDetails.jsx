import React from 'react';
import { Link, useLoaderData} from 'react-router-dom';

const MovieDetails = () => {
    const data=useLoaderData()
    console.log(data.id);
    return (
        <div className=' card_container-style'>
          <h2 className='movie-heading'>Movie Details</h2>
          
            <div className='card_container'>
            
             <div>
                <img className='img-styles' src={data.image.medium}/>
             </div>
             <div className='Movie-details-rightSide'>
            <h4>Movie Name: {data.name}</h4>
            <Link to={`/booking/${data.id}`}><span className='btn btn-primary'> Book Ticket</span></Link>
             </div>
            </div>
        </div>
    );
};

export default MovieDetails;