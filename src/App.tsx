import { NavLink, Routes, Route } from "react-router-dom";
import Cats from "./pages/Cats";
import Crypto from "./pages/Crypto";
import News from "./pages/News";

export default function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Новости</NavLink>
        <NavLink to="/cats">Коты</NavLink>
        <NavLink to="/crypto">Крипта</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/crypto" element={<Crypto />} />
      </Routes>
    </>
  );
}
