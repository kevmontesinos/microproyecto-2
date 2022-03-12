import styles from "./PeliculaInd.module.css"
import { Link } from "react-router-dom"


function PeliculaInd({ movie }) {
    const { id, poster_path, title } = movie;

    const imageURL = "https://image.tmdb.org/t/p/w300/" + poster_path;

    return (
        <li className={styles.peliculaInd}>
            <Link to={"/movies/" + id}><img width="100%" height="450px" className={styles.peliculaImg} src={imageURL} alt={title} />
                <h2 className={styles.movieName}>{title}</h2>
            </Link>
        </li>);
}

export default PeliculaInd;