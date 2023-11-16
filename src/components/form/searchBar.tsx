import React, { ChangeEvent, useState } from "react";
import { Input } from "./input";
import { Checkbox } from "./checkbox";

export function SearchBar() {
  const [checked, setChecked] = useState<boolean>(false);
  function handleChangeChecked(e: ChangeEvent<HTMLInputElement>) {
    setChecked(!checked);
  }

  const [value, setValue] = useState<string>("");
  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }
  return (
    <>
      <Input
        value={value}
        placeholder={value}
        label={"Votre recherche"}
        onChange={handleChangeSearch}
      />
      <Checkbox
        checked={checked}
        label={"Je sais pas quoi afficher encore mais ca va venir "}
        id={0}
        onChange={handleChangeChecked}
      />
      {checked && <p>Checker</p>}
    </>
  );
}
