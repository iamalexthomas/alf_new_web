import { Route, Routes } from "react-router-dom";

import Home1 from "./pages/homePages/Home1";
import Home2Page from "./pages/homePages/Home2";
import Home3Page from "./pages/homePages/Home3";
import Home4Page from "./pages/homePages/Home4";
import Home5Page from "./pages/homePages/Home5";
import Home6Page from "./pages/homePages/Home6";

import HomeDarkPage from "./pages/homePages/HomeDark";
import Home2DarkPage from "./pages/homePages/Home2DarkPage";
import Home3DarkPage from "./pages/homePages/Home3DarkPage";
import Home4DarkPage from "./pages/homePages/Home4DarkPage";
import Home5DarkPage from "./pages/homePages/Home5DarkPage";
import Home6DarkPage from "./pages/homePages/Home6DarkPage";

import AboutUsPage from "./pages/innerPages/AboutUsPage";
import ChefPage from "./pages/innerPages/ChefPage";
import ReservationPage from "./pages/innerPages/ReservationPage";
import ContactPage from "./pages/innerPages/ContactPage";
import RegisterPage from "./pages/innerPages/RegisterPage";
import LoginPage from "./pages/innerPages/LoginPage";

import FoodMenuPage from "./pages/FoodPage/FoodMenu";
import FoodMenu2Page from "./pages/FoodPage/FoodMenu2";
import FoodMenu3Page from "./pages/FoodPage/FoodMenu3";

import BlogStandardPage from "./pages/blogPages/BlogStandardPage";
import BlogWithSidebarPage from "./pages/blogPages/BlogWithSidebarPage";
import Blog2ColumnPage from "./pages/blogPages/Blog2ColumnPage";
import Blog3ColumnPage from "./pages/blogPages/Blog3ColumnPage";
import BlogSinglePage from "./pages/blogPages/BlogSinglePage";
import BlogSingleWithSidebarPage from "./pages/blogPages/BlogSingleWithSidebar";

import ShopPage from "./pages/shopPage/ShopPage";
import ShopSingleThumbPage from "./pages/shopPage/ShopSingleThumbPage";
import ShopSinglePage from "./pages/shopPage/ShopSinglePage";
import CartPage from "./pages/shopPage/CartPage";
import CheckoutPage from "./pages/shopPage/CheckoutPage";

import NotFoundPage from "./pages/innerPages/NotFoundPage";
import ChefDetailsPage from "./pages/innerPages/ChefDetailsPage";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home1 />} ></Route>
                <Route path="/home-2" element={<Home2Page />} ></Route>
                <Route path="/home-3" element={<Home3Page />} ></Route>
                <Route path="/home-4" element={<Home4Page />} ></Route>
                <Route path="/home-5" element={<Home5Page />} ></Route>
                <Route path="/home-6" element={<Home6Page />} ></Route>

                <Route path="/home-dark" element={<HomeDarkPage />} ></Route>
                <Route path="/home-2-dark" element={<Home2DarkPage />} ></Route>
                <Route path="/home-3-dark" element={<Home3DarkPage />} ></Route>
                <Route path="/home-4-dark" element={<Home4DarkPage />} ></Route>
                <Route path="/home-5-dark" element={<Home5DarkPage />} ></Route>
                <Route path="/home-6-dark" element={<Home6DarkPage />} ></Route>

                <Route path="/about-us" element={<AboutUsPage />} ></Route>
                <Route path="/chef" element={<ChefPage />} ></Route>
                <Route path="/chef-details/:id" element={<ChefDetailsPage />} ></Route>
                <Route path="/reservation" element={<ReservationPage />} ></Route>
                <Route path="/contact" element={<ContactPage />} ></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>

                <Route path="/food-menu" element={<FoodMenuPage />} ></Route>
                <Route path="/food-menu-2" element={<FoodMenu2Page />} ></Route>
                <Route path="/food-menu-3" element={<FoodMenu3Page />} ></Route>

                <Route path='/blog-standard' element={<BlogStandardPage />}></Route>
                <Route path='/blog-standard?:page?' element={<BlogStandardPage />}></Route>
                <Route path='/blog-with-sidebar' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog-with-sidebar?:page?' element={<BlogWithSidebarPage />}></Route>
                <Route path='/blog-2-column' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog-2-column?:page?' element={<Blog2ColumnPage />}></Route>
                <Route path='/blog-3-column' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-3-column?:page?' element={<Blog3ColumnPage />}></Route>
                <Route path='/blog-single/:id' element={<BlogSinglePage />}></Route>
                <Route path='/blog-single-with-sidebar/:id' element={<BlogSingleWithSidebarPage />}></Route>

                <Route path='/shop' element={<ShopPage />}></Route>
                <Route path='/shop?:page?' element={<ShopPage />}></Route>
                <Route path='/shop-single/:id' element={<ShopSinglePage />}></Route>
                <Route path='/shop-single-thumb/:id' element={<ShopSingleThumbPage />}></Route>
                <Route path='/cart' element={<CartPage />}></Route>
                <Route path='/checkout' element={<CheckoutPage />}></Route>

                <Route path="*" element={<NotFoundPage />} ></Route>
            </Routes>
        </>
    );
};

export default Routers;