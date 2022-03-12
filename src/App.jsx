import HomePage from "./pages/HomePage"
import Page404 from "./pages/Page404"
import DetallesPage from "./pages/DetallesPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./App.module.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";



function App() {
  return (
    <Router>
      <header className={styles.title}>
        <Link to="/"><h1>THEFLIX</h1></Link>
      </header>
      
      <Routes>
      <Route path="/login" element ={<LoginPage/>}></Route>
      <Route path="/register" element ={<RegisterPage/>}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies/:movieID" element={<DetallesPage />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
    </Router>

  );
}

export default App;
