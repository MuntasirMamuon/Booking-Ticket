import React from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { Link, useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const data = useLoaderData();
//   const [rating, setRating] = useState(0) /
  console.log(data);
  return (
    <div className=" card_container-style">
      <h2 className="movie-heading">Movie Details</h2>

      <div className="card_container">
        <div>
          <img className="img-styles" src={data.image.medium} />
        </div>
        <div className="Movie-details-rightSide">
          <h4>Movie Name: {data.name}</h4>
          <h4>Language: {data.language}</h4>
          <h4>Country :{data.country}</h4>
        <div className="rating">
        <p>Rating:</p> 
        <span className="rating-style"><Rating style={{ maxWidth: 250 }} value={data.rating.average} readOnly  /></span>
        </div>
          
          <p>Status:{data.status}</p>
          <p>Description:{data.summary}</p>
          <Link to={`/booking/${data.id}`}>
            <span className="btn btn-primary"> Book Ticket</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
