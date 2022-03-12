import HomePage from "./pages/HomePage"
import Page404 from "./pages/Page404"
import DetallesPage from "./pages/DetallesPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import ListaPeliculasPage from "./pages/ListaPeliculasPage";


function App() {
  return (
    <Router>
      <header className={styles.title}>
        <Link to="/"><h1>THEFLIX</h1></Link>
      </header>
      
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movie/:movieID" element={<DetallesPage />}></Route>
        <Route path="/movies/" element={<ListaPeliculasPage />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      
      </Routes>
    </Router>

  );
}

export default App;
