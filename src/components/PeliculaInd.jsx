import styles from "./PeliculaInd.module.css"
import { Link } from "react-router-dom"


function PeliculaInd({ movie }) {
    const { id, poster_path, title, original_language, popularity } = movie;

    const imageURL = "https://image.tmdb.org/t/p/w300/" + poster_path;

    return (
        <li className={styles.peliculaInd}>
            <Link to={"/movie/" + id}><img width="100%" height="450px" className={styles.peliculaImg} src={imageURL} alt={title} /></Link>

            <h2>{title}</h2>
        </li>);
}

export default PeliculaInd;

/*           <div>
                <h3>{original_language}</h3>
                <h3>{popularity}</h3>
            </div> */