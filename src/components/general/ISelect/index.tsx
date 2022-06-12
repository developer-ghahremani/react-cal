import React, { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<{}> {
  options: { label: string; value: string }[];
}

const ISelect = ({ options, className, ...props }: Props) => {
  return (
    <select className={`app-select ${className}`} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default ISelect;
