
import React, {useState} from "react";

export default function CardMovie( props ){
    
    const [currentMovies, setCurrentMovies] = useState([]);

    const searchCurrentMovie = async (e) => {
        e.preventDefault();
        setCurrentMovies(props.movie)
        console.log(props.movie);
    }
    console.log(props);
    var movie = props.movie;
    return (
        
        <div className="card" onClick={searchCurrentMovie}>
            <figure>
                <img className="card--image"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title + ' poster'}
                    />
            </figure>
            <div className="card--content">
            <h3 className="card--title">{movie.title}</h3>
            <p><small>Fecha estreno: {movie.release_date}</small></p>
            <p><small>Puntuación: {movie.vote_average}</small></p>
            <p className="card--desc">{movie.overview}</p>
            </div>

        </div>
    )
}