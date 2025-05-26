import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { removeFromCart } from "../../store/slices/cartSlice";
import { toast } from "react-toastify";

const HeaderCart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
        toast.error("Product removed from cart");
    };

    return (
        <div className="attr-right">
            <div className="attr-nav attr-box">
                <ul>
                    <li className="dropdown">
                        <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="far fa-shopping-cart" />
                            <span className="badge">{totalItems}</span>
                        </Link>

                        <ul className="dropdown-menu cart-list">
                            {cartItems.length > 0 ? (
                                <>
                                    <ul>
                                        {cartItems.map((item) => (
                                            <li key={item.id}>
                                                <div className="thumb">
                                                    <span className="photo">
                                                        <img src={`/assets/img/shop/${item.thumb}`} alt={item.title} />
                                                    </span>
                                                    <Link to="#" className="remove-product" onClick={() => handleRemove(item.id)} >
                                                        <i className="fas fa-times" />
                                                    </Link>
                                                </div>
                                                <div className="info">
                                                    <h6>{item.title}</h6>
                                                    <p>{item.quantity}x - <span className="price">${item.price}</span></p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    <li className="total">
                                        <span className="pull-right"><strong>Total</strong>: ${totalAmount.toFixed(2)}</span>
                                        <Link to="/cart" className="btn btn-default btn-cart">Cart</Link>
                                        <Link to="/checkout" className="btn btn-default btn-cart">Checkout</Link>
                                    </li>
                                </>
                            ) : (
                                <li className="total">
                                    <p>Your cart is empty.</p>
                                </li>
                            )}
                        </ul>
                    </li>
                    <li className="button"><Link to="/contact">Reservation</Link></li>
                </ul>
            </div>
        </div>
    );
};


export default HeaderCart;