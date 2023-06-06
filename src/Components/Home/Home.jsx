import React, { useEffect, useState } from 'react';
import './Home.css'
import MovieCard from './MovieCard';

const Home = () => {
    const [movieData,setMovieData]=useState([]);
    
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(res=>res.json())
        .then(data=>{
           setMovieData(data);
        })
    },[])
    return (
        <div>
             <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
            {
                movieData.map(movie=><MovieCard key={movie.show.id} movie={movie}></MovieCard>)
            }
                
               
            </div>
        </section>
       
        </div>
    );
};

export default Home;