import ProfileImg from 'assets/images/profile-img.png';
import ResultCard from 'components/ResultCard';
import axios from 'axios';
import './styles.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

type FormData = {
  profile: string;
};

type GitProfile = {
  avatar_url: string;
  url: string;
  followers: string;
  location: string;
  name: string;
};

const FindPage = () => {
  const [gitprofile, setGitProfile] = useState<GitProfile>();

  const [formData, setFormData] = useState<FormData>({
    profile: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.profile}`)
      .then((response) => {
        setGitProfile(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setGitProfile(undefined);
        console.log(error);
      });
  };

  return (
    <>
      <div className="search-container">
        <div className="search-content-container">
          <h2>Encontre um perfil Github</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="profile"
                value={formData.profile}
                className="search-input"
                placeholder="Usuário Github"
                onChange={handleChange}
              />
              <button type="submit" className="btn-find">
                Encontrar
              </button>
            </div>
          </form>
        </div>
      </div>
      {gitprofile &&
      <div className="result-container">
        <div className="result-img-profile">
          <img src={gitprofile.avatar_url} alt="foto_profile" />
        </div>
        <div className="result-information-profile">
          <h4>Informações</h4>
          <ResultCard
            title="Perfil:"
            description={gitprofile.url}
          />
          <ResultCard title="Seguidores:" description={gitprofile.followers} />
          <ResultCard title="Localidade:" description={gitprofile.location} />
          <ResultCard title="Nome:" description={gitprofile.name} />
        </div>
      </div>
      }
    </>
  );
};

export default FindPage;
