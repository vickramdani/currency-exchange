import React, { useState, useEffect } from "react";

import InputCurrency from "./component/InputCurrency";
import CurrencyList from "./component/CurrencyList";
import CurrencyOption from "./component/CurrencyOption";
import "./App.css";

const BASE_URL = "https://api.exchangeratesapi.io/latest?base=USD";

function App() {
  const [selectedCurr, setSelectedCurr] = useState([]);
  const [amount, setAmount] = useState(10);
  const [toCurrency, setToCurrency] = useState();

  console.log(selectedCurr);

  useEffect(() => {
    if (toCurrency != null) {
      fetchExchangeRates();
    }
  }, [toCurrency]);

  const fetchExchangeRates = async () => {
    //const response = await axios(`${BASE_URL}&symbols=${toCurrency}`);
    // console.log(response.data.rates);
    // setSelectedCurr([
    //   ...selectedCurr,
    //   { rates: Object.values(response.data.rates).toString() }
    // ]);
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

  const handleFromAmountChange = e => {
    setAmount(e.target.value);
  };

  const handleChange = e => {
    setSelectedCurr([...selectedCurr, { currency: e.value, label: e.label }]);
    setToCurrency(e.value);
  };

  return (
    <div className="App">
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
