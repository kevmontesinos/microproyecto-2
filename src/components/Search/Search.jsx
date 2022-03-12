import styles from "./Search.module.css"
import searchImg from "./search.png";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";

function Search() {
    const [text, setText] = useState("");
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const refreshPage = () => {
        setTimeout(() => {
            window.location.reload(false)
        }, 250);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setQuery({ search: text, page: 1});
        refreshPage()
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input className={styles.inputBox} type="text" value={text} onChange={(event) => setText(event.target.value)} />
                <button className={styles.search} type="submit" ><img src={searchImg} width="15px" /></button>
            </div>
        </form>);
}

export default Search;