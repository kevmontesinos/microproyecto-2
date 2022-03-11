import PeliculasLista from "../components/PeliculasLista"
import Search from "../components/Search";
import Login from "../components/Login/Login"

function HomePage() {
    return (
        <div>
            <main>
                <Login/>
                <Search/>
                <PeliculasLista/>
            </main>
        </div>
    );
}

export default HomePage;