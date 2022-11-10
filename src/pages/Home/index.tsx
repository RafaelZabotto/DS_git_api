import Navbar from 'components/Navbar';
import './styles.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className="home-text-container">
        <h1>Desafio Github API</h1>
        <p>DevSuperior - Escola de programação</p>
      </div>
      <Link to="/search">
      <button className="btn-start">Começar</button>
      </Link>
    </>
  );
};

export default Home;