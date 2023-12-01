import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import CurrencyRow from './components/converter/Converter.jsx';
import { FaArrowsAltH } from "react-icons/fa";
const BASE_URL = "https://api.fxratesapi.com/latest"


function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState();
  const [exchangeRate, setExchaneRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrecy, setAmountInFromCurrency] = useState(true);
  const [usdToUahRate, setUsdToUahRate] = useState();
  const [eurToUahRate, setEurToUahRate] = useState();

  let toAmount, fromAmount
  if (amountInFromCurrecy) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        const firstCurrency = Object.keys(data.rates)[156]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setCurrencyFrom(data.base)
        setCurrencyTo(firstCurrency)
        setExchaneRate(data.rates[firstCurrency])
      })
  }, [])

  useEffect(() => {
    if (currencyFrom != null && currencyTo != null) {
      fetch(`${BASE_URL}?base=${currencyFrom}&currencies=${currencyTo}`)
        .then(res => res.json())
        .then(data => setExchaneRate(data.rates[currencyTo]))
    }
  }, [currencyFrom, currencyTo])

  useEffect(() => {
    fetch(`${BASE_URL}?base=USD&currencies=UAH`)
      .then(res => res.json())
      .then(data => setUsdToUahRate(Object.values(data.rates)[0].toFixed(4)))
  }, [])

  useEffect(() => {
    fetch(`${BASE_URL}?base=EUR&currencies=UAH`)
      .then(res => res.json())
      .then(data => setEurToUahRate(Object.values(data.rates)[0].toFixed(4)))
  }, [])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }
  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className="App">
      <Header
        usdToUahRate={usdToUahRate}
        eurToUahRate={eurToUahRate} />
      <div className='exchanger'>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={currencyFrom}
          onChangeCurrency={e => setCurrencyFrom(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <FaArrowsAltH className='arrow' />
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={currencyTo}
          onChangeCurrency={e => setCurrencyTo(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}

        />
      </div>
    </div>
  );
}

export default App;
