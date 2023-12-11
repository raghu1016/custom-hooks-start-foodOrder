import Header from "./Components/Header";
import Meals from "./Components/Meals.jsx";
import { CartContextProvider } from "./Store/CartContext";
import { UserProgressContextprovider } from "./Store/UserProgressContext";
import Cart from "./Components/Cart";
import CheckOut from "./Components/CheckOut";

function App() {
  return (
    <UserProgressContextprovider>
      <CartContextProvider>
        {/* <> */}
        <Header />
        <Meals />
        <Cart />
        <CheckOut />
        {/* </> */}
      </CartContextProvider>
    </UserProgressContextprovider>
  );
}

export default App;
