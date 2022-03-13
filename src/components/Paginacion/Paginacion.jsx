import { useSearchParams } from "react-router-dom";
import styles from "./paginacion.module.css"


function Paginacion(props) {
    const [query, setQuery] = useSearchParams();
    const page = query.get("page");
    const search = query.get("search")
    const text = props.paso === 1 ? " Next >>" : "<< Back "

    const handleSubmit = (event) => {
        event.preventDefault();
        setQuery({ search: search, page: (parseInt(page) + props.paso) })
    }

    const margin = (text == " Next >>" ? {marginLeft: "15px"} : {marginRight: "15px"});

    return (

        <form onSubmit={handleSubmit} className={styles.botonConteiner} style={margin}>
            <button type="submit" className={styles.boton}>{text}</button>
        </form>
    )
}

export default Paginacion;