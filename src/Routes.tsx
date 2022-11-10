import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import FindPage from 'pages/FindPage';

const Rota = () => (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<FindPage />} />
      </Routes>
    </BrowserRouter>
  );
  
  export default Rota;