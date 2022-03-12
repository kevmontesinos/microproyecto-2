import PeliculasLista from "../components/PeliculasLista/PeliculasLista"
import { Link } from "react-router-dom"


function HomePage() {
    return (
        <div>
            <main>
                {/* <PeliculasLista modo = "home" />          */}
                <Link to={"/movies?page=1&&search="} state={{from : "home"}}>Lista de Peliculas</Link>
                <h2 style={{color: "white"}}> Estrenos</h2>
                <PeliculasLista modo = "estrenos" />
            </main>
        </div>
    );
}

export default HomePage;