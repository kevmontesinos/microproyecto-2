import movies from "../movies.json";

import { useState, useEffect } from "react";
import MovieCard from "./PeliculaInd";
import styles from "./PeliculasLista.module.css"
import LoadingSpinner from "./LoadingSpinner";

function PeliculasLista() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => fetch("https://api.themoviedb.org/3/discover/movie", {
        headers: {
            Authorization:
                //Si te deja de funcionar la pagina quita el token ctrl S y pon el token ctrl S
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTExZjRmNjRjN2E5MjMzOTY3MzdmYmQzMzFlOThiYiIsInN1YiI6IjYyMmFkZTY5NmQxYmIyMDA0NjNmMTEwNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mtAlramI6XLaFawJ0eEcq2F1LgHWBR1hliJG-GZmiZE", 
            "Content-Type": "application/json;charset=utf-8",
        },
    })
        .then((result) => result.json())
        .then(data => {
            setMovies(data.results)
            console.log(data)
            setLoading(false)
        }
        ), []);

        if (loading){
            return (<LoadingSpinner/>)
        }

    return (
        <ul className={styles.peliculasLista}>
            {
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)


            }
        </ul>
    );
}

export default PeliculasLista;