import PeliculasLista from "../components/PeliculasLista/PeliculasLista";
import Search from "../components/Search/Search";
import Paginacion from "../components/Paginacion/Paginacion";
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { sessionContext } from '../context/SessionContext';

function ListaPeliculasPage() {

  const [query, setQuery] = useSearchParams();
  const page = query.get("page");
  const [session, setSession] = useContext(sessionContext)

  return (
    <div>
        <Search />
        <PeliculasLista modo="lista" />
        <div style={{display: "flex" , width : "50%" , "justify-content": "center", margin: auto}}>
          {page > 1 ? <Paginacion paso = {-1}  /> : <br />}
          <Paginacion paso={1} />
        </div>
    </div>
  );
}

export default ListaPeliculasPage;