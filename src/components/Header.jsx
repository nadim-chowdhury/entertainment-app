import React from "react";

const Header = () => {
  return (
    <div className="header flex justify-between items-center">
      <div className="logo uppercase text-3xl p-2 font-bold">
        <h1>TubeFlix</h1>
      </div>

      <div className="links text-lg">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Header;
