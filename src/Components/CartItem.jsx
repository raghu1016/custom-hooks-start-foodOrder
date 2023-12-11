import { currencyFormatter } from "../Util/formatting";

export default function CartItem({
  name,
  quantity,
  price,
  onRemove,
  onAdd,
  onRemoveOne,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity}* {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onRemoveOne}>-</button>
        <span>{quantity}</span>
        <button onClick={onAdd}>+</button>
        {/* <button onClick = {onRemove}>Remove</button> */}
      </p>
    </li>
  );
}
