import PeliculasLista from "../components/PeliculasLista/PeliculasLista"
import Search from "../components/Search/Search";

function HomePage() {
    return (
        <div>
            <main>
                <Search/>
                <PeliculasLista/>
            </main>
        </div>
    );
}

export default HomePage;