import { useSearchParams } from "react-router-dom";
import styles from "./paginacion.module.css"
import { useEffect } from "react";


function Paginacion(props) {
    const [query, setQuery] = useSearchParams();
    const page = query.get("page");
    const search = query.get("search")
    const text = props.paso === 1 ? " Next >>" : "<< Back "

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [page, search])

    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery({ search: search, page: (parseInt(page) + props.paso) })
    }

    return (

        <form onSubmit={handleSubmit} className={styles.botonConteiner} >
            <button type="submit" className={styles.boton}>{text}</button>
        </form>
    )
}

export default Paginacion;