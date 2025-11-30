import React from "react";
import { ThemeTogglerButton } from "./animate-ui/components/buttons/theme-toggler";

const NavBar = () => {
  return (
    <nav className="hidden">
      <h1 className="hidden">Where in the world?</h1>

      <div>
        <ThemeTogglerButton />
      </div>
    </nav>
  );
};

export default NavBar;
