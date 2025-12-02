import React from "react";
import NavBar from "./components/NavBar";
import CountryContainer from "./components/CountryContainer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import CountryDetail from "./components/CountryDetail";
import { Route, Routes } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main className="font-sans w-full overflow-x-hidden ">
      <NavBar />

      <Routes>
        <Route path="/" element={<CountryContainer />} />
        <Route path="/:countryName" element={<CountryDetail />} />
      </Routes>
      <CountryContainer />
    </main>
  );
};

export default App;
