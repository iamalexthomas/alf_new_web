import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { useOrderDetailsQuery  } from "../../store/api/orderApi";
import { toast } from "react-toastify";

const OrderDetailsPage = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const dispatch = useDispatch();
  const { currentOrder, loading, error } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    if (orderId) {
      dispatch(useOrderDetailsQuery (orderId));
    }
  }, [dispatch, orderId]);

  if (loading) return <div>Loading...</div>;
  if (error) {
    toast.error(error);
    return <div>Error: {error}</div>;
  }
  if (!currentOrder) return <div>Order not found.</div>;

  return (
    <div className="order-details-page default-padding">
      <div className="container">
        <h2>Order #{currentOrder._id}</h2>
        <div className="order-summary">
          <p><strong>Date:</strong> {new Date(currentOrder.createdAt || Date.now()).toLocaleDateString()}</p>
          <p><strong>Total:</strong> ${currentOrder.totalAmount.toFixed(2)}</p>
          <p><strong>Status:</strong> {currentOrder.paymentInfo?.status || "Pending"}</p>
          <p><strong>Payment Method:</strong> {currentOrder.paymentMethod}</p>
        </div>
        <h3>Shipping Information</h3>
        <div className="shipping-info">
          <p><strong>Name:</strong> {currentOrder.shippingInfo.name}</p>
          <p><strong>Address:</strong> {currentOrder.shippingInfo.address}, {currentOrder.shippingInfo.city}, {currentOrder.shippingInfo.pinCode}</p>
          <p><strong>Phone:</strong> {currentOrder.shippingInfo.phoneNo || "N/A"}</p>
        </div>
        <h3>Order Items</h3>
        <div className="order-items table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {currentOrder.orderItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={`/assets/img/shop/${item.thumb}`}
                      alt={item.name}
                      style={{ width: "50px", marginRight: "10px" }}
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
        <Link to="/orders" className="btn btn-secondary">Back to Orders</Link>
      </div>
    </div>
  );
};

export default OrderDetailsPage;