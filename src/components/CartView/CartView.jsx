import { useCart } from "../../context/CartContext";
import './CartView.css'
import UserInfo from "./UserInfo";

export default function CartView() {
  const { cart, removeItem, clear } = useCart(); 

  if (cart.length === 0) {
    return <h2>El carrito está vacío</h2>;
  }

  return (
    <div>
      <h2>Resumen del Carrito</h2>
      <ul>
        {cart.map((item) => (
            <div className="row">
                <li className="d-flex col-6 mb-3" key={item.id}>
                    <div className="col-6">
                        <img className="imagen" src={item.image} alt="" />
                    </div>
                    <div className="col-6">
                        <h3>{item.title}</h3>
                        <p>Cantidad: {item.quantity}</p>
                        <p>Precio: ${item.price}</p>
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </div>
                </li>
            </div>
          
        ))}
      </ul>
      <button className="ms-5" onClick={clear}>Vaciar Carrito</button>
      <UserInfo/>
    </div>
  );
}