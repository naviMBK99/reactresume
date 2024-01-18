import React from "react";
import { Route, Routes } from "react-router-dom";

import LifeChronology from "./components/LifeChronology";
import Films from "./components/Films";
import Skills from "./components/Skills";

import RickMortyList from "./components/RickMortyList";
import RickMortyItem from "./components/RickMortyItem";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/chronology" element={<LifeChronology />} />
        <Route path="/films" element={<Films />} />
        <Route path="/skills" element={<Skills />} />

        <Route path="/rickmorty" element={<RickMortyList />} />
        <Route path="/rickmorty/:id" element={<RickMortyItem />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
