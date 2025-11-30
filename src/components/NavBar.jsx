import React from "react";
import { ThemeTogglerButton } from "./animate-ui/components/buttons/theme-toggler";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 xl:px-16 py-4 xl:py-6 bg-card shadow-lg">
      <h1 className="lg:text-lg xl:text-2xl font-extrabold">
        Where in the world?
      </h1>

      <ThemeTogglerButton className="bg-inherit text-foreground font-semibold text-sm xl:text-lg b-0 shadow-none hover:bg-card" />
    </nav>
  );
};

export default NavBar;
