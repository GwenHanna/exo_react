import { ChangeEvent } from "react";

interface inputInterface {
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

/**
 *
 * @param {inputInterface}input
 * @returns
 */
export function Input(input: inputInterface): JSX.Element {
  return (
    <div className="d-flex flex-column">
      <label htmlFor={input.value}>{input.label}</label>
      <input
        className="form-control me-2"
        type="search"
        placeholder={input.placeholder}
        aria-label="Search"
        id={input.value}
        value={input.value}
        onChange={input.onChange}
      />
    </div>
  );
}
