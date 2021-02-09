import React from "react";

function InputCurrency({ onChangeAmount, amount }) {
  return (
    <div>
      <div className="input-number">
        <input
          className="input"
          type="number"
          value={amount}
          onChange={onChangeAmount}
          maxLength="9"
        />
        <p className="base-currency-full">USD - United States Dollars</p>
        <h2 className="base-currency">USD</h2>
      </div>
    </div>
  );
}

export default InputCurrency;
