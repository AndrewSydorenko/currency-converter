import React from "react";
import { HeaderStyled } from "./Hesder.styled";

const Header = ({ usdToUahRate, eurToUahRate }) => {
  return (
    <HeaderStyled>
      <div>
        <h1>Currency Converter</h1>
      </div>
      <div className="card">
        <p>USD / UAH {usdToUahRate}</p>
        <p>EUR / UAH {eurToUahRate}</p>
      </div>
    </HeaderStyled>
  );
};

export default Header;
