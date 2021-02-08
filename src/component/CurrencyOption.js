import React from "react";
import Select from "react-select";

const options = [
  { value: "CAD", label: "Canadian Dollar (CAD)" },
  { value: "IDR", label: "Indonesian Rupiah (IDR)" },
  { value: "GBP", label: "Britain Pound sterling (GBP)" },
  { value: "CHF", label: "Swiss Franc (CHF)" },
  { value: "SGD", label: "Singapore Dollar (SGD)" },
  { value: "INR", label: "Indian Rupee (INR)" },
  { value: "MYR", label: "Malaysian Ringgit (MYR)" },
  { value: "JPY", label: "Japanese Yen (JPY)" },
  { value: "KRW", label: "South Korean Won (KRW)" }
];

function CurrencyOption({ selectedCurr, handleChange }) {
  return (
    <div>
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
