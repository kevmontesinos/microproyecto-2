import PeliculasLista from "../components/PeliculasLista/PeliculasLista"
import { Link } from "react-router-dom";
import {useContext} from "react";
import { sessionContext } from '../context/SessionContext';


function HomePage() {

    const [session, setSession] = useContext(sessionContext)
    console.log(session)
    const style = {color:"white", textAlign: "center"}
    const box = {backgroundColor: "red", padding: "15px", width: "300px", borderRadius: "20px", margin: "auto"}
    const button = {width: "100%", display:"flex"}
    return (
        <div>
            <main>
                {session == null ? null : 
                <Link style = {button} to={"/movies?page=1&&search="} state={{from : "home"}}>
                    <h2 style = {{...style, ...box}} >Lista de Peliculas</h2>
                </Link>}
                <PeliculasLista modo = "home" />         
                <h2 style={style}> Estrenos</h2>
                <PeliculasLista modo = "estrenos" />
            </main>
        </div>
    );
}

export default HomePage;