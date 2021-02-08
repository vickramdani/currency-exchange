import React from "react";

function CurrencyList({ selectedCurr, amount, removeCurrency }) {
  return (
    <div>
      {selectedCurr.map(currencies => (
        <div key={currencies.currency}>
          <p>{currencies.currency}</p>
          <p>{currencies.label}</p>
          <p>{(currencies.rates * amount).toLocaleString()}</p>
          <button
            className="delete-btn"
            onClick={() => removeCurrency(currencies.currency)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CurrencyList;
