import { useState, useEffect } from "react";
import MovieCard from "../PeliculaInd/PeliculaInd";
import styles from "./PeliculasLista.module.css"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useSearchParams } from "react-router-dom";

function PeliculasLista(props) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useSearchParams();
    const page = query.get("page");
    const search = query.get("search")


    let URL = "https://api.themoviedb.org/3/discover/movie?page=" + page

    if (!(search === "")) {
        URL = "https://api.themoviedb.org/3/search/movie?query=" + search + "&page=" + page
    }

    if (props.modo === "home") {
        URL = "https://api.themoviedb.org/3/discover/movie"
    }


    if (props.modo === "estrenos") {
        URL = "https://api.themoviedb.org/3/movie/upcoming"
    }

    useEffect(() =>
        fetch(URL, {
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

    if (loading) {
        return (<LoadingSpinner />)
    }

    if (props.modo === "home") {
        return (
            <ul className={styles.peliculasLista}>
                {
                    movies.slice(0, 8).map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </ul>
        )
    }

    if (props.modo === "estrenos") {
        return (
            <ul className={styles.peliculasLista}>
                {
                    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </ul>
        )
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