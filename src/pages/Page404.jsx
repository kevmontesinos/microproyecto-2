import { Link } from "react-router-dom"

function Page404() {
    return (
        <div>
            <h1>404 PAGE NOT FOUND</h1>
            <Link to="/" >Click para volver a la página de inicio</Link>
        </div>


    );
}

export default Page404;