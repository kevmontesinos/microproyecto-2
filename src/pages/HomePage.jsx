import PeliculasLista from "../components/PeliculasLista"
import Search from "../components/Search";

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