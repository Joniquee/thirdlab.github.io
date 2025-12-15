import { NavLink, Routes, Route } from "react-router-dom";
import mainImage from './assets/react.svg';
import Cats from "./pages/Cats";
import Crypto from "./pages/Crypto";
import News from "./pages/News";

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/news">Новости</NavLink>
        <NavLink to="/cats">Коты</NavLink>
        <NavLink to="/crypto">Крипта</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<div style={{ textAlign: 'center', padding: '2rem' }}>
      <img
        src={mainImage}
        alt="Главная"
        style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
      />
    </div>} />
        <Route path="/news" element={<News />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </>
  );
}

