import React from "react";
import Header from "./components/Header";

import Footer from "./components/Footer";

import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <div>
      <Header />
      {/* <MainSection1 /> */}
      {/* <RickMortyList /> */}
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
