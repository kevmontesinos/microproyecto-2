import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movie from "../movie.json"
import styles from "./PeliculaDetalles.module.css";
import LoadingSpinner from "./LoadingSpinner";

function PeliculaDetalles() {

    const [movie, setMovie] = useState();
    const [loading, setLoading] = useState(true);
    const { movieID } = useParams();

    useEffect(() => fetch("https://api.themoviedb.org/3/movie/" + movieID, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
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
        <img className={styles.columna + " " + styles.peliculaImg} src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.title} />
        <div className={styles.columna}>
            <p><strong>Title: </strong>{movie.title}</p>
            <p><strong>Overview: </strong> {movie.overview}</p>
            <p><strong>Genres: </strong> {movie.genres.map(genre => genre.name).join(", ")}</p>
        </div>
    </div>);
}

export default PeliculaDetalles;