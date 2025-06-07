// src/components/OrderDetailsPage.tsx
"use client"; // Required for Next.js client-side features

import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useOrderDetailsQuery } from "../../store/api/orderApi";
import { toast } from "react-toastify";

// Define TypeScript interface for OrderItem (aligned with cartSlice CartItem)
interface OrderItem {
  product: string; // Matches cartSlice CartItem's product
  name: string;
  image: string; // Matches cartSlice CartItem's image
  price: number;
  quantity: number;
}

// Define TypeScript interface for Order
interface Order {
  _id: string;
  createdAt?: string;
  totalAmount: number;
  paymentInfo?: {
    status: string;
  };
  paymentMethod?: string;
  shippingInfo: {
    name: string;
    address?: string;
    city: string;
    pinCode?: string;
    phoneNo?: string;
  };
  orderItems: OrderItem[];
}

const OrderDetailsPage = () => {
  const { orderId } = useParams<{ orderId: string }>();

  // Use RTK Query hook directly to fetch order details
  const {
    data: currentOrder,
    isLoading: loading,
    error,
    refetch,
  } = useOrderDetailsQuery(orderId!, {
    skip: !orderId, // Skip query if orderId is undefined
  });

  // Handle RTK Query errors
  useEffect(() => {
    if (error) {
      const errorMessage =
        "status" in error
          ? `Error: ${error.status} - ${JSON.stringify(error.data)}`
          : "Failed to fetch order details";
      toast.error(errorMessage);
    }
  }, [error]);

  // Refetch when orderId changes
  useEffect(() => {
    if (orderId) {
      refetch();
    }
  }, [orderId, refetch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading order details.</div>;
  if (!currentOrder) return <div>Order not found.</div>;

  return (
    <div className="order-details-page default-padding">
      <div className="container">
        <h2>Order #{currentOrder._id}</h2>
        <div className="order-summary">
          <p>
            <strong>Date:</strong>{" "}
            {new Date(currentOrder.createdAt || Date.now()).toLocaleDateString()}
          </p>
          <p>
            <strong>Total:</strong> ${currentOrder.totalAmount.toFixed(2)}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            {currentOrder.paymentInfo?.status || "Pending"}
          </p>
          <p>
            <strong>Payment Method:</strong>{" "}
            {currentOrder.paymentMethod || "N/A"}
          </p>
        </div>
        <h3>Shipping Information</h3>
        <div className="shipping-info">
          <p>
            <strong>Name:</strong> {currentOrder.shippingInfo.name}
          </p>
          <p>
            <strong>Address:</strong>{" "}
            {currentOrder.shippingInfo.address || ""},{" "}
            {currentOrder.shippingInfo.city},{" "}
            {currentOrder.shippingInfo.pinCode || ""}
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            {currentOrder.shippingInfo.phoneNo || "N/A"}
          </p>
        </div>
        <h3>Order Items</h3>
        <div className="order-items table-responsive">
          <table className="table table-bordered" aria-label="Order Items">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.orderItems.map((item: OrderItem) => (
                <tr key={item.product}>
                  <td>
                    <img
                      src={
                        item.image.startsWith("http")
                          ? item.image
                          : `/assets/img/shop/${item.image}`
                      }
                      alt={item.name}
                      style={{ width: "50px", marginRight: "10px" }}
                      onError={(e) =>
                        (e.currentTarget.src =
                          "/assets/img/shop/placeholder.jpg")
                      }
                    />
                    {item.name}
                  </td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to="/orders" className="btn btn-secondary">
          Back to Orders
        </Link>
      </div>
    </div>
  );
};

export default OrderDetailsPage;