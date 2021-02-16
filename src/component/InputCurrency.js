import React from "react";

function InputCurrency({ onChangeAmount, amount }) {
  return (
    <div className="input-number">
      <input
        className="input"
        type="text"
        value={amount}
        onChange={onChangeAmount}
        maxLength={11}
      />
      <p className="base-currency-full">USD - United States Dollars</p>
      <h2 className="base-currency">USD</h2>
    </div>
  );
}

export default InputCurrency;
