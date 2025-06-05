import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { removeCartItem, updateCartItem } from "../../store/features/cartSlice";
import { toast } from "react-toastify";

const CartPageContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleRemove = (id: string) => {
    dispatch(removeCartItem(id));
    toast.error("Product removed from cart");
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateCartItem({ product: id, quantity }));
  };

  // ... rest of your component JSX ...
};

export default CartPageContent;