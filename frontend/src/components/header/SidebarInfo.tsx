import logoLight2 from "/assets/img/logo-light-2.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import SocialShareV3 from "../social/SocialShareV3";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../store/slices/cartSlice";
import { RootState } from "../../store/store";

interface HeaderSearchProps {
    closeInfoBar?: () => void;
    isInfoOpen?: boolean;
}

interface FormEventHandler {
    // eslint-disable-next-line no-unused-vars
    (event: React.FormEvent<HTMLFormElement>): void;
}

const handleForm: FormEventHandler = (event) => {
    event.preventDefault()
    const form = event.target as HTMLFormElement;
    form.reset()
    toast.success("Thanks For Your Message")
}

const SidebarInfo: React.FC<HeaderSearchProps> = ({ closeInfoBar, isInfoOpen }) => {

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
        toast.error("Product removed from cart");
    };

    return (
        <>
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

            <div className={`side ${isInfoOpen ? "on" : ""}`}>
                <Link to="#" className="close-side" onClick={closeInfoBar}><i className="fa fa-times"></i></Link>
                <div className="widget">
                    <div className="logo">
                        <img src={logoLight2} alt="Logo" />
                    </div>
                    <p>
                        Arrived compass prepare an on as. Reasonable particular on my it in sympathize. Size now easy eat hand how. Unwilling he departure elsewhere dejection at. Heart large seems may purse means few blind.
                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p>
                                    <strong>California, TX 70240</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Email</p>
                                    <strong>support@validtheme.com</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Contact</p>
                                    <strong>+44-20-7328-4499</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4 className="title">Get Subscribed!</h4>
                    <form onSubmit={handleForm}>
                        <div className="input-group stylish-input-group">
                            <input type="email" placeholder="Enter your e-mail" className="form-control" name="email" autoComplete="off" required />
                            <span className="input-group-addon">
                                <button type="submit">
                                    <i className="fas fa-arrow-right" />
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
                <div className="widget social">
                    <ul className="link">
                        <SocialShareV3 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;