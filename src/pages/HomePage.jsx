import PeliculasLista from "../components/PeliculasLista/PeliculasLista"
import { Link } from "react-router-dom";


function HomePage() {

    const style = {color:"white", textAlign: "center"}
    const box = {backgroundColor: "red", padding: "15px", width: "300px", borderRadius: "20px", margin: "auto"}
    const button = {width: "100%", display:"flex"}
    const size = {"font-size" : "50px"}
    return (
        <div>
            <main>
                <Link style = {button} to={"/movies?page=1&&search="} state={{from : "home"}}>
                    <h2 style = {{...style, ...box}} >Lista de Peliculas</h2>
                </Link>
                <PeliculasLista modo = "home" />         
                <h2 style={{...style, ...size}}> Upcoming Movies</h2>
                <PeliculasLista modo = "estrenos" />
            </main>
        </div>
    );
}

export default HomePage;