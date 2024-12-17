import React from "react";

interface TextInputProps {
  type: string;
  name: string;
  label: string;
  value: string;
  error: boolean;
  disabled?: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<TextInputProps> =     ({
  type,
  name,
  label,
  error,
  disabled = false,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
    <input
      type={type}
      id={label}
      name={name}
      disabled={disabled}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border p-2 w-full rounded"
    />
      {error && <p className="error">Input filed can't be empty!</p>}
    </div>
  );
};

export default TextInput;
