import { NavLink, Routes, Route } from "react-router-dom";
import Cats from "./pages/Cats";
import Crypto from "./pages/Crypto";
import News from "./pages/News";
import './styles.css'

export default function App() {
  return (
    <>
      <nav>
	<NavLink to="/thirdlab.github.io">Главная</NavLink>
        <NavLink to="/thirdlab.github.io/news">Новости</NavLink>
        <NavLink to="/thirdlab.github.io/cats">Коты</NavLink>
        <NavLink to="/thirdlab.github.io/crypto">Крипта</NavLink>
      </nav>

      <Routes>
        <Route path="/thirdlab.github.io/news" element={<News />} />
        <Route path="/thirdlab.github.io/cats" element={<Cats />} />
        <Route path="/thirdlab.github.io/crypto" element={<Crypto />} />
      </Routes>
    </>
  );
}
