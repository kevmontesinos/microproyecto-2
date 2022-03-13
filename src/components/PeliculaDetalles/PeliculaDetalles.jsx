import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./PeliculaDetalles.module.css";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function PeliculaDetalles() {

    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const { movieID } = useParams();

    useEffect(() => fetch("https://api.themoviedb.org/3/movie/" + movieID, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTExZjRmNjRjN2E5MjMzOTY3MzdmYmQzMzFlOThiYiIsInN1YiI6IjYyMmFkZTY5NmQxYmIyMDA0NjNmMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mtAlramI6XLaFawJ0eEcq2F1LgHWBR1hliJG-GZmiZE",
            "Content-Type": "application/json;charset=utf-8",
        },
    })
        .then((result) => result.json())
        .then(data => {
            setMovie(data)
            setLoading(false)
        }
        ), []);


    if (loading) {
        return (<LoadingSpinner />)
    }

    return (<div className={styles.detallesConteiner}>
        <img className={styles.peliculaImg} src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.title} />
        <div className={styles.columna}>
            <p><strong>Title: </strong>{movie.title}</p>
            <p><strong>Overview: </strong> {movie.overview}</p>
            <p><strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
            <p><strong>Original Language: </strong> {movie.original_language}</p>
            <p><strong>Budget: </strong> {movie.budget} USD</p>
            <p><strong>Popularity: </strong> {movie.popularity}</p>
            <p><strong>Production Companies: </strong> {movie.production_companies.map(prod => prod.name).join(", ")}</p>
            <p><strong>Release Date: </strong> {movie.release_date}</p>
            <p><strong>Status: </strong> {movie.status}</p>

        </div>
    </div>);
}

export default PeliculaDetalles;