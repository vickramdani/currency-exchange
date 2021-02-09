import React from "react";

function CurrencyList({ selectedCurr, amount, removeCurrency }) {
  return (
    <div className="container">
      {selectedCurr.map(currencies => (
        <div className="curr-list" key={currencies.currency}>
          <div>
            <p className="curr-symbol">{currencies.currency}</p>
            <p className="curr-label">
              {currencies.currency} - {currencies.label}
            </p>
            <p className="curr-rates">
              1 USD = {(currencies.rates * 1).toLocaleString()}{" "}
              {currencies.currency}
            </p>
          </div>
          <div>
            <p className="curr-amount">
              {(currencies.rates * amount).toLocaleString()}
            </p>
          </div>
          <div>
            <button
              className="delete-btn"
              onClick={() => removeCurrency(currencies.currency)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrencyList;
