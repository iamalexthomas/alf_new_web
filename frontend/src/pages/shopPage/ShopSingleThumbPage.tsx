import LayoutV5 from "../../components/layouts/LayoutV5";
import ShopSingleThumbContent from "../../components/shop/ShopSingleThumbContent";
import ProductData from "../../assets/jsonData/product/ProductData.json";
import { useParams } from "react-router-dom";

const ShopSingleThumbPage = () => {

    const { id } = useParams()
    const data = ProductData.find(product => product.id === parseInt(id || '0'));

    return (
        <>
            <LayoutV5 title="Grilled Flank Steak" breadCrumb="shop-single-thumb">
                {data && <ShopSingleThumbContent productInfo={data} />}
                {!data && <div>No Data Found</div>}
            </LayoutV5>
        </>
    );
};

export default ShopSingleThumbPage;