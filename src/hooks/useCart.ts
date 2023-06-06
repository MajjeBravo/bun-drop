import { useEffect, useState } from "react";
import useMenu, { MenuItem } from "./useMenu";

export interface CartItem extends MenuItem {
  quantity: number;
}

function useCart() {
  const [cart, setCart] = useState<CartItem[]>(() => {

    const localCart = window.localStorage.getItem("cart");
    return localCart !== null
      ? JSON.parse(localCart)
      : [];
  } );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const menu = useMenu();

  function addToCart(id: number) {
    const foundIndex = cart.findIndex((item) => item.id === id);

    if (foundIndex >= 0) {
      let newCart = [...cart];
      newCart[foundIndex] = {
        ...newCart[foundIndex],
        quantity: newCart[foundIndex].quantity + 1,
      };
      setCart(newCart);
    } else {
      const itemToAdd = menu.find((menuItem) => menuItem.id === id);
      if (itemToAdd === undefined) return;
      setCart([...cart, { ...itemToAdd, quantity: 1 }]);
    }
  }

  function removeFromCart(id: number) {
    const foundIndex = cart.findIndex((item) => item.id === id);

    if (foundIndex >= 0) {
      let newCart = [...cart];
      const itemQuantity = newCart[foundIndex].quantity - 1;
      if (itemQuantity > 0) {
        newCart[foundIndex] = {
          ...newCart[foundIndex],
          quantity: itemQuantity,
        };
      } else {
        newCart.splice(foundIndex, 1);
      }
      setCart(newCart);
    } else {
      console.log("Could not find item.");
    }
  }

  const totalPrice = cart.reduce((a, b) =>  a + (b.price * b.quantity), 0) || 0

  const clearCart= () => {
    setCart([])
  }
  return { cart, addToCart, removeFromCart, totalPrice, clearCart };
}

export default useCart;
