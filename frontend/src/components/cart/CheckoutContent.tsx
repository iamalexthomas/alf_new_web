// src/components/CheckoutContent.tsx
"use client"; // Required for Next.js client-side features

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { CartItem, saveShippingInfo } from "../../store/features/cartSlice"; // Import CartItem and saveShippingInfo
import CustomSelect from "../select/CustomSelect";
import PaymentModal from "../modal/PaymentModal";
import { toast } from "react-toastify";

interface FormEventHandler {
  (event: React.FormEvent<HTMLFormElement>): void;
}

const CheckoutContent = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart?.cartItems ?? []); // Use cartItems, not items
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const subtotal = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 0),
    0
  );

  const persons = [
    { value: "1", label: "Australia" },
    { value: "2", label: "Canada" },
    { value: "3", label: "China" },
    { value: "4", label: "Japan" },
    { value: "5", label: "Bangladesh" },
  ];
  const handleForm: FormEventHandler = (event) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const shippingInfo = {
      firstName: formData.get("f-name") as string,
      lastName: formData.get("l-name") as string,
      country: formData.get("select") as string,
      streetAddress: formData.get("st-address") as string,
      streetAddress2: formData.get("st-address2") as string,
      city: formData.get("t-city") as string,
      state: formData.get("st-country") as string,
      postcode: formData.get("postcode") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      comments: formData.get("comments") as string,
    };
    
    // Validate required fields
    if (!shippingInfo.firstName || !shippingInfo.lastName || !shippingInfo.streetAddress || 
        !shippingInfo.city || !shippingInfo.state || !shippingInfo.postcode || !shippingInfo.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    dispatch(saveShippingInfo(shippingInfo));
    setIsFormValid(true);
    setShowPaymentModal(true);
  };

  const handleConfirmOrder = (paymentMethod: string) => {
    // Here you would typically integrate with your payment processing
    console.log("Order confirmed with payment method:", paymentMethod);
    
    // For demonstration, we'll just show different messages based on payment method
    if (paymentMethod !== "cod") {
      toast.info(`Redirecting to ${paymentMethod} payment gateway...`);
      // In a real app, you'd redirect to payment processor here
    }
    
    // Reset form after successful order
    setIsFormValid(false);
  };

  return (
    <div className="checkout-area default-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <form className="checkout-form" onSubmit={handleForm}>
              <div className="row">
                <div className="col-lg-6">
                  <h3>Billing Details</h3>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="f-name">First name *</label>
                        <input
                          className="form-control"
                          id="f-name"
                          name="f-name"
                          type="text"
                          autoComplete="given-name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <label htmlFor="l-name">Last name *</label>
                        <input
                          className="form-control"
                          id="l-name"
                          name="l-name"
                          type="text"
                          autoComplete="family-name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="select">Country / Region *</label>
                        <CustomSelect options={persons} selectValue="2" />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="st-address">Street address *</label>
                        <input
                          className="form-control"
                          id="st-address"
                          name="st-address"
                          type="text"
                          placeholder="House number and street name"
                          autoComplete="street-address"
                          required
                        />
                        <input
                          className="form-control mt-2"
                          id="st-address2"
                          name="st-address2"
                          type="text"
                          placeholder="Apartment, suite, unit, etc. (optional)"
                          autoComplete="address-line2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="t-city">Town / City *</label>
                        <input
                          className="form-control"
                          id="t-city"
                          name="t-city"
                          type="text"
                          autoComplete="address-level2"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="st-country">State / County *</label>
                        <input
                          className="form-control"
                          id="st-country"
                          name="st-country"
                          type="text"
                          autoComplete="address-level1"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="postcode">Postcode / ZIP *</label>
                        <input
                          className="form-control"
                          id="postcode"
                          name="postcode"
                          type="text"
                          autoComplete="postal-code"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="phone">Phone (optional)</label>
                        <input
                          className="form-control"
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group">
                        <label htmlFor="email">Email address *</label>
                        <input
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <label htmlFor="comments">Order Notes (Optional)</label>
                        <textarea
                          className="form-control"
                          id="comments"
                          name="comments"
                          placeholder="Notes about your order, e.g. special notes for delivery."
                          autoComplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="shop-cart-totals mt-50 mt-md-30 mt-xs-10">
                    <h2>Your Order</h2>
                    <div className="table-responsive table-bordered">
                      <table className="table" aria-label="Order Summary">
                        <thead>
                          <tr>
                            <th scope="col">Product</th>
                            <th scope="col">Subtotal</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.length === 0 ? (
                            <tr>
                              <td colSpan={2}>Your cart is empty</td>
                            </tr>
                          ) : (
                            cartItems.map((item: CartItem) => (
                              <tr key={item.product}>
                                <td>
                                  {item.name} × {item.quantity}
                                </td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                              </tr>
                            ))
                          )}
                          <tr>
                            <th scope="row">Shipping</th>
                            <td>Free Shipping</td>
                          </tr>
                          <tr>
                            <th scope="row">Total</th>
                            <td>${subtotal.toFixed(2)}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>                  <p className="woocommerce-info">
                    Complete your order by selecting a payment method below.
                  </p>
                  <button type="submit" name="submit" id="submit">
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        orderTotal={subtotal}
        onConfirmOrder={handleConfirmOrder}
      />
    </div>
  );
};

export default CheckoutContent;