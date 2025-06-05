import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { toast } from "react-toastify";
import { addToCart } from "../../store/features/cartSlice";

interface DataType {
  id?: number;
  thumb?: string;
  badge?: string;
  tags?: string[] | undefined;
  name?: string;
  price?: string;
  oldPrice?: string;
  delay?: string;
}

const SingleShopV1 = ({ product }: { product: DataType }) => {
  const { id, thumb, badge, tags, name, price, oldPrice, delay } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = () => {
    const alreadyInCart = cartItems.some((item) => item.id === product.id);

    if (alreadyInCart) {
      toast.warning("Product already in cart");
    } else {
      dispatch(
        addToCart({
          id: product.id!,
          title: product.name!,
          price: parseFloat(product.price!.replace("$", "")),
          thumb: product.thumb!,
          quantity: 1,
        })
      );
      toast.success("Product added successfully");
    }
  };

  return (
    <li className="product" data-aos="fade-up" data-aos-delay={delay}>
      <div className="product-contents">
        <div className="product-image">
          <span className={badge === "" ? "d-none" : "onsale"}>{badge}</span>
          <Link to={`/shop-single-thumb/${id}`}>
            <img src={`/assets/img/shop/${thumb}`} alt="Product" width={450} height={450} />
          </Link>
          <div className="shop-action">
            <ul>
              <li className="cart">
                <Link to="#" onClick={handleAddToCart}>
                  <span>Add to Cart</span>
                </Link>
              </li>
              <li className="quick-view">
                <Link to="#">
                  <span>Quick view</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="product-caption">
          <div className="product-tags">
            {tags && tags.length > 0 ? (
              tags.map((data, index) => (
                <Link to="#" key={index}>
                  {data}
                  {index < tags.length - 1 && ","}
                </Link>
              ))
            ) : (
              <></>
            )}
          </div>
          <h4 className="product-title">
            <Link to={`/shop-single-thumb/${id}`}>{name}</Link>
          </h4>
          <div className="price">
            <span className={oldPrice === "" ? "d-none" : ""}>
              <del>${oldPrice}</del>
            </span>
            <span> ${price}</span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default SingleShopV1;