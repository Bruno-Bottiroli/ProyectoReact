import "./NavBar.css";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function CartWidget() {
  const { cart } = useCart(); 
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to="/cart"> 
      <div className="d-flex">
        <img className="carrito" src="/carrito.png" alt="Carrito de compras" />
        <p className="cartnumber align-self-center fs-4" id="carrito">{totalItems}</p>
      </div>
    </Link>
  );
}