import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const productInCart = cart.find(prod => prod.id === item.id);

    if (productInCart) {
      const newQuantity = productInCart.quantity + quantity;
      if (newQuantity <= item.stock) {
        setCart(cart.map(prod =>
          prod.id === item.id ? { ...prod, quantity: newQuantity } : prod
        ));
      } else {
        console.log(`No puedes agregar más de ${item.stock} unidades de este producto.`);
      }
    } else {
      if (quantity <= item.stock) {
        setCart([...cart, { ...item, quantity }]);
      } else {
        console.log(`No puedes agregar más de ${item.stock} unidades de este producto.`);
      }
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some(prod => prod.id === id);
  };

  const createNewOrder = (order) => {
    const db = getFirestore()
    const [orderID, setOrderId] = useState('')
    const orders = collection(db, "order")

    addDoc(orders, order).then((snapshot) => {
        setOrderId(snapshot.id)
    })
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, createNewOrder }}>
      {children}
    </CartContext.Provider>
  );
}


export const useCart = () => {
  return useContext(CartContext);
};