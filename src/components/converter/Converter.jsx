import React from "react";
import { Main } from "./Converter.styled";

const CurrencyRow = ({
  currencyOptions,
  selectedCurrency,
  onChangeCurrency,
  amount,
  onChangeAmount,
}) => {
  return (
    <Main>
      <div className="formWrapper">
        <form className="convertForm">
          <input
            className="convInput"
            type="number"
            value={amount}
            onChange={onChangeAmount}
          />
          <select
            className="convSelect"
            value={selectedCurrency}
            onChange={onChangeCurrency}
            type="text"
          >
            {currencyOptions.map((option) => (
              <option
                key={Math.random().toString(36).substr(2, 9)}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </form>
      </div>
    </Main>
  );
};

export default CurrencyRow;
