import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import CustomSelect from "../select/CustomSelect";
import { useCreateNewOrderMutation } from "../../store/api/orderApi";
import { clearCart } from "../../store/features/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";

interface SelectOption {
  value: string;
  label: string;
}

const CheckoutContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const user = useSelector((state: RootState) => state.user.user);
  const [createOrder, { isLoading }] = useCreateNewOrderMutation();

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!user) {
      toast.error("Please log in to place an order");
      navigate("/login");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const orderData = {
      orderItems: cartItems.map((item) => ({
        product: item.product,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image
      })),
      shippingInfo: {
        name: `${formData.get("f-name")} ${formData.get("l-name")}`.trim(),
        phoneNo: formData.get("phone") as string,
        address: formData.get("st-address") as string,
        city: formData.get("t-city") as string,
        pinCode: formData.get("postcode") as string,
      },
      itemsPrice: subtotal,
      taxAmount: 0,
      shippingAmount: 0,
      totalAmount: subtotal,
      paymentMethod: "COD",
    };

    try {
      await createOrder(orderData).unwrap();
      dispatch(clearCart());
      form.reset();
      toast.success("Order placed successfully!");
      navigate("/orders");
    } catch (error: any) {
      console.error("Order placement failed:", error);
      toast.error(error.data?.message || "Failed to place order");
    }
  };

  // ... rest of your component JSX ...
};

export default CheckoutContent;