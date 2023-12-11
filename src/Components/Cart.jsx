import { useContext } from "react";
import CartContext from "../Store/CartContext";
import { currencyFormatter } from "../Util/formatting";
import Modal from "./UI/Modal";
import UserProgressContext from "../Store/UserProgressContext";
import Button from "./UI/Button";
import CartItem from "./CartItem";

export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const cartTotalPrice = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function handleCloseCart() {
    userProgressCtx.hideCart();
  }
  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }
  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === "cart"}
      onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          // <li key={item.id}>
          //   {item.name} - {currencyFormatter.format(item.price)}
          // </li>
          <CartItem
            key={item.id}
            {...item}
            onAdd={() => cartCtx.addItem(item)}
            onRemoveOne={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>

      <p className="cart-total">{currencyFormatter.format(cartTotalPrice)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
}
