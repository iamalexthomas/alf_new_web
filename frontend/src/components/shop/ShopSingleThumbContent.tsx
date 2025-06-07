// src/components/ShopSingleThumbContent.tsx
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addToCart, CartItem } from "../../store/features/cartSlice"; // Import CartItem
import { toast } from "react-toastify";
import { useState } from "react";
import ShopSingleTab from "./ShopSingleTab";
import RelatedProducts from "../product/RelatedProducts";
import RatingsStar from "../utilities/RatingsStar";

interface DataType {
  id?: number;
  thumb?: string;
  badge?: string;
  tags: string[];
  name?: string;
  price?: string;
  oldPrice?: string;
  ratings: number;
  reviews?: number;
}

const ShopSingleThumbContent = ({ productInfo }: { productInfo: DataType }) => {
  const { thumb, name, reviews, ratings, oldPrice, price, tags } = productInfo;
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart?.cartItems ?? []); // Fix: Use cartItems, not items
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Ensure productInfo has required properties
    if (!productInfo.id || !productInfo.name || !productInfo.thumb || !productInfo.price) {
      toast.error("Invalid product data");
      return;
    }

    const alreadyInCart = cartItems.some((item) => item.product === String(productInfo.id));

    if (alreadyInCart) {
      toast.warning("Product already in cart");
    } else {
      dispatch(
        addToCart({
          product: String(productInfo.id), // Convert id to string for cartSlice
          name: productInfo.name,
          image: productInfo.thumb,
          price: parseFloat(productInfo.price.replace("$", "")),
          quantity,
        } as CartItem)
      );
      toast.success("Product added successfully");
    }
  };

  return (
    <div className="validtheme-shop-single-area default-padding">
      <div className="container">
        <div className="product-details">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-thumb">
                <div className="item-box">
                  <div className="product-item">
                    <img
                      src={thumb ? `/assets/img/shop/${thumb}` : "/assets/img/shop/placeholder.jpg"}
                      alt={name || "Product"}
                      width={450}
                      height={450}
                    />
                    <span className="onsale theme">-16%</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="single-product-contents">
                <div className="summary-top-box">
                  <div className="product-tags">
                    {tags &&
                      tags.map((data, index) => (
                        <Link key={index} to="#">
                          {data}
                          {index < tags.length - 1 && ","}
                        </Link>
                      ))}
                  </div>
                  <div className="review-count">
                    <RatingsStar ratings={ratings} />
                    <span>({reviews} Review)</span>
                  </div>
                </div>
                <h2 className="product-title">{name}</h2>
                <div className="price">
                  <span className={`${oldPrice === "" ? "d-none" : ""} me-2`}>
                    <del>${oldPrice}</del>
                  </span>
                  <span>${price}</span>
                </div>
                <div className="product-stock validthemes-in-stock">
                  <span>In Stock</span>
                </div>
                <p>
                  The Aspire 5 is a compact laptop in a thin case with a metal cover, a high-quality Full HD IPS display and a rich set of interfaces. Thanks to its powerful components, the laptop can handle resource-intensive tasks perfectly and is also suitable for most games. non-characteristic words etc. Suspendisse ultricies nisi vel quam suscipit. Sabertooth peacock flounder
                </p>
                <div className="product-purchase-list">
                  <input
                    type="number"
                    id="quantity"
                    step={1}
                    name="quantity"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    placeholder="0"
                    aria-label="Quantity"
                  />
                  <button
                    type="button" // Change from Link to button for proper semantics
                    className="btn secondary btn-theme btn-sm animation"
                    onClick={handleAddToCart}
                  >
                    <i className="fas fa-shopping-cart" />
                    Add to cart
                  </button>
                  <div className="shop-action">
                    <ul>
                      <li className="wishlist">
                        <Link to="#">
                          <span>Add to wishlist</span>
                        </Link>
                      </li>
                      <li className="compare">
                        <Link to="#">
                          <span>Compare</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="product-estimate-delivery">
                  <i className="fas fa-box-open" />
                  <strong> 2-day Delivery</strong>
                  <span>Speedy and reliable parcel delivery!</span>
                </div>
                <div className="product-meta">
                  <span className="sku">
                    <strong>SKU:</strong> BE45VGRT
                  </span>
                  <span className="posted-in">
                    <strong>Category:</strong>
                    <Link to="#">Computer</Link>,
                    <Link to="#">Speaker</Link>,
                    <Link to="#">Headphone</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ShopSingleTab />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ShopSingleThumbContent;