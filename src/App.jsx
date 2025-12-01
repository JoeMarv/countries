import React from "react";
import NavBar from "./components/NavBar";
import CountryContainer from "./components/CountryContainer";
import ClickSpark from "./components/ClickSpark";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <ClickSpark sparkColor='#808080'
    sparkSize={10}
    sparkRadius={15}
    sparkCount={8}
    duration={400}>
      <main className="font-sans w-full overflow-x-hidden ">
        <NavBar />
        <CountryContainer />
      </main>
    </ClickSpark>    
  );
};

export default App;
