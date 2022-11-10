import ProfileImg from 'assets/images/profile-img.png';
import Navbar from 'components/Navbar';
import './styles.css';

const FindPage = () => {
  return (
    <>
      <div className="search-container">
        <div className='search-content-container'>
          <h2>Encontre um perfil Github</h2>
          <input type="text" placeholder='Usuário Github' />
        </div>
        <button className="btn-find">Encontrar</button>
      </div>
      <div className='result-container'>
        <div className='result-img-profile'>
            <img src={ProfileImg} alt="foto profile"/>
        </div>
        <div className='result-information-profile'>
            <h4>Informações</h4>
            <ul>
                <li>Perfil</li>
                <li>Seguidores</li>
                <li>Localidade</li>
                <li>Nome</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default FindPage;
