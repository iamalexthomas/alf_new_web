import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { useMyOrdersQuery } from "../../store/api/orderApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state: RootState) => state.order);

  useEffect(() => {
    dispatch(useMyOrdersQuery());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) {
    toast.error(error);
    return <div>Error: {error}</div>;
  }

  return (
    <div className="orders-page default-padding">
      <div className="container">
        <h2>Your Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{new Date(order.createdAt || Date.now()).toLocaleDateString()}</td>
                    <td>${order.totalAmount.toFixed(2)}</td>
                    <td>{order.paymentInfo?.status || "Pending"}</td>
                    <td>
                      <Link to={`/order/${order._id}`}>View Details</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;