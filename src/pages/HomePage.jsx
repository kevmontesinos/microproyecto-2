import PeliculasLista from "../components/PeliculasLista/PeliculasLista"
import Search from "../components/Search/Search";
import Login from "../components/Login/Login"
import { Link } from "react-router-dom"


function HomePage() {
    return (
        <div>
            <main>
                <Login/>  
                <PeliculasLista modo = "home" />         
                <Link to={"/movies?page=1&&search="} state={{from : "home"}}>Lista de Peliculas</Link>
                <h2>Estrenos</h2>
                <PeliculasLista modo = "estrenos" />
            </main>
        </div>
    );
}

export default HomePage;