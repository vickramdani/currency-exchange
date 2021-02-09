import React from "react";
import Select from "react-select";

const options = [
  { value: "CAD", label: "Canadian Dollar" },
  { value: "EUR", label: "Euro" },
  { value: "IDR", label: "Indonesian Rupiah" },
  { value: "GBP", label: "Britain Pound sterling" },
  { value: "CHF", label: "Swiss Franc" },
  { value: "SGD", label: "Singapore Dollar" },
  { value: "INR", label: "Indian Rupee" },
  { value: "MYR", label: "Malaysian Ringgit" },
  { value: "JPY", label: "Japanese Yen" },
  { value: "KRW", label: "South Korean Won" }
];

function CurrencyOption({ selectedCurr, handleChange }) {
  return (
    <div className="option">
      <Select
        placeholder="Select Currency"
        options={options}
        value={options.find(obj => obj.value === selectedCurr)}
        onChange={handleChange}
      />
    </div>
  );
}

export default CurrencyOption;
