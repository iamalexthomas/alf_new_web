import ProductData from "../../assets/jsonData/product/ProductData.json";
import SingleShopV1 from "./SingleShopV1";
import shape14 from "/assets/img/shape/14.png";
import shape15 from "/assets/img/shape/15.png";

const ShopV1 = () => {
  return (
    <div className="validtheme-shop-area default-padding text-center">
      <div className="shape-seperate">
        <img src={shape14} alt="Image Not Found" />
        <img src={shape15} alt="Image Not Found" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-title">Best Deal</h4>
              <h2 className="title">Our Popular Dishes</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="vt-products columns-4">
              {ProductData.slice(0, 8).map((product) => (
                <SingleShopV1 product={product} key={product.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopV1;