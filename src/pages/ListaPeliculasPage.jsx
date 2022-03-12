import PeliculasLista from "../components/PeliculasLista/PeliculasLista";
import Search from "../components/Search/Search";
import Paginacion from "../components/Paginacion/Paginacion";

import { useSearchParams } from "react-router-dom";

function ListaPeliculasPage() {

  const [query, setQuery] = useSearchParams();
  const page = query.get("page");

  return (
    <div>
      <Search />
      <PeliculasLista modo="lista" />
      <div style={{display: "flex"}}>
        {page > 1 ? <Paginacion paso = {-1}  /> : <br />}
        <Paginacion paso={1} />
      </div>
    </div>);
}

export default ListaPeliculasPage;