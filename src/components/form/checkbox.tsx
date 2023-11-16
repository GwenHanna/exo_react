import { ChangeEvent } from "react";
import { displayFlexColumn } from "../../utils/design";

interface checkboxInterface {
  checked: boolean;
  label: string;
  id: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox(checkbox: checkboxInterface): JSX.Element {
  return (
    <div className={displayFlexColumn.join(" ")}>
      <label htmlFor={checkbox.id.toString()}>{checkbox.label}</label>
      <input
        checked={checkbox.checked}
        type="checkbox"
        id={checkbox.id.toString()}
        onChange={checkbox.onChange}
      />
    </div>
  );
}
