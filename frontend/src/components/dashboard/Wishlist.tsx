// src/components/othersPages/dashboard/Wishlist.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProductCardWishlist } from "@/components/shopCards/ProductCardWishlist";
import { useContextElement } from "@/context/Context";
import { allProducts } from "@/data/products";

export default function Wishlist() {
  const { wishList } = useContextElement();
  const [wishListItems, setWishListItems] = useState<any[]>([]);

  useEffect(() => {
    if (wishList) {
      setWishListItems(allProducts.filter((el) => wishList.includes(el.id)));
    }
  }, [wishList]);

  return (
    <div className="about-style-one-area default-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="about-style-one-info">
            <h4 className="sub-heading">Your Wishlist</h4>
            <h2 className="title">Wishlist</h2>
            <div className="grid-layout wrapper-shop" data-grid="grid-3">
              {wishListItems.slice(0, 3).map((elm, i) => (
                <ProductCardWishlist product={elm} key={i} />
              ))}
            </div>
            {!wishListItems.length && (
              <div className="row align-items-center w-100" style={{ rowGap: "20px" }}>
                <div className="col-lg-3 col-md-6 fs-18">Your wishlist is empty</div>
                <div className="col-lg-3 col-md-6">
                  <Link
                    to="/shop-default"
                    className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center"
                  >
                    Explore Products!
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}