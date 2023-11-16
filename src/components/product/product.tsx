import { ChangeEvent, useState } from "react";
import { Checkbox } from "../form/checkbox";
import { ProductRow } from "./productRow";

export function Product(product: any) {
  const [checked, setChecked] = useState<boolean>(true);

  let row = [];

  function handleChangeChecked(e: ChangeEvent<HTMLInputElement>) {
    setChecked(!checked);
  }
  for (let i = 0; i < product.product.length; i++) {
    row.push(
      <ProductRow
        name={product.product[i].name}
        price={product.product[i].price}
        stocked={product.product[i].stocked}
      />
    );
  }
  console.log(product.product.length);

  return (
    <>
      <Checkbox
        checked={checked}
        label={"Afficher les produit en stock"}
        id={0}
        onChange={handleChangeChecked}
      />
      {checked && <p>Checker</p>}

      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <td>Nom</td>
            <td>Prix</td>
          </tr>
          {row}
        </thead>
      </table>
    </>
  );
}
