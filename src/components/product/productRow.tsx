export function ProductRow(product: any) {
  return (
    <tr>
      <th>{product.name}</th>
      <th>{product.price}</th>
    </tr>
  );
}
