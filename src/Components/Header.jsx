import logoImg from "../assets/logo.jpg";
import CartContext from "../Store/CartContext";
import Button from "./UI/Button";
import { useContext } from "react";
import UserProgressContext from "../Store/UserProgressContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return (totalNumberOfItems += item.quantity);
  }, 0);

  function hanldeShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>Online food</h1>
      </div>
      <nav>
        <Button textOnly onClick={hanldeShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
