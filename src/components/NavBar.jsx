import React from "react";
import { ThemeTogglerButton } from "./animate-ui/components/buttons/theme-toggler";

const NavBar = () => {
  return (
    <nav className="flex-center flex-row justify-between px-16 py-6">
      <h1 className="">Where in the world?</h1>

      <ThemeTogglerButton className='w-8 font-sans'/>
    </nav>
  );
};

export default NavBar;
