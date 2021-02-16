import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from "./component/Header";
import InputCurrency from "./component/InputCurrency";
import CurrencyList from "./component/CurrencyList";
import CurrencyOption from "./component/CurrencyOption";
import "./App.css";

const BASE_URL = "https://api.exchangeratesapi.io/latest?base=USD";

function App() {
  const [selectedCurr, setSelectedCurr] = useState([]);
  const [amount, setAmount] = useState(10);
  const [toCurrency, setToCurrency] = useState();

  useEffect(() => {
    if (toCurrency != null) {
      fetchExchangeRates();
    }
  }, [toCurrency]);

  const fetchExchangeRates = async () => {
    const response = await fetch(`${BASE_URL}&symbols=${toCurrency}`);
    const data = await response.json();

    const exchange = { rates: Object.values(data.rates) };
    setSelectedCurr(
      selectedCurr.map(curr => {
        if (curr.rates === undefined) {
          return { ...curr, ...exchange };
        } else {
          return curr;
        }
      })
    );
  };

  const removeCurrency = curr => {
    setSelectedCurr(selectedCurr.filter(item => item.currency !== curr));
  };

  const removeDuplicate = (arr, key) => {
    return arr.reduce((arr, item) => {
      const remove = arr.filter(i => i[key] !== item[key]);
      return [...remove, item];
    }, []);
  }

  const handleFromAmountChange = e => {
    setAmount(e.target.value);
  };

  const handleChange = e => {
    setSelectedCurr(removeDuplicate(([...selectedCurr, { currency: e.value, label: e.label }]), "currency"));
    setToCurrency(e.value);
    // removeDuplicate(selectedCurr, "currency")
  };
  // console.log(removeDuplicate(selectedCurr, "currency"));


  return (
    <div className="App container">
      <Header />
      <InputCurrency onChangeAmount={handleFromAmountChange} amount={amount} />
      <CurrencyList
        amount={amount}
        selectedCurr={selectedCurr}
        removeCurrency={removeCurrency}
      />
      <CurrencyOption selectedCurr={selectedCurr} handleChange={handleChange} />
    </div>
  );
}

export default App;
