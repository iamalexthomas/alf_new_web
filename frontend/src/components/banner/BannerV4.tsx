import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import illustration3 from "/assets/img/illustration/3.webp"
import pizza from "/assets/img/illustration/pizza.png"
import shape22 from "/assets/img/shape/22.webp"
import shape23 from "/assets/img/shape/23.webp"
import shape24 from "/assets/img/shape/24.webp"
import { Link } from "react-router-dom";

const BannerV4 = () => {
    return (
        <>
            <div className="banner-area banner-style-four navigation-circle overflow-hidden bg-theme text-light bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/1.webp)' }}>
                <Swiper
                    direction={"horizontal"}
                    loop={true}
                    speed={3000}
                    // autoplay={{
                    //     delay: 5000,
                    //     disableOnInteraction: false,
                    // }}
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    className="banner-fade"
                    modules={[Keyboard, Pagination, Navigation, EffectFade]}
                >
                    <div className="swiper-wrapper">

                        {/* Single Item */}
                        <SwiperSlide className="swiper-slide">
                            <div className="container">
                                <div className="content">
                                    <div className="shape">
                                        <img src={shape23} alt="Image Not Found" />
                                        <img src={shape24} alt="Image Not Found" />
                                    </div>
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h4>Purchase today. just <strong>$65</strong></h4>
                                            <h2 >Special Offer Cheese Burger</h2>
                                            <p>
                                                Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing know.
                                            </p>
                                            <div className="button mt-40">
                                                <Link className="btn btn-theme btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="thumb">
                                                <img src={illustration3} alt="Image Not Found" className='position-relative' style={{zIndex:99}} />
                                                <img src={shape22} alt="Image Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Single Item */}
                        <SwiperSlide className="swiper-slide">
                            <div className="container">
                                <div className="content">
                                    <div className="shape">
                                        <img src={shape23} alt="Image Not Found" />
                                        <img src={shape24} alt="Image Not Found" />
                                    </div>
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h4>Purchase today. just <strong>$58</strong></h4>
                                            <h2>French Break Cheesy Pizza</h2>
                                            <p>
                                                Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing know.
                                            </p>
                                            <div className="button mt-40">
                                                <Link className="btn btn-theme btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="thumb">
                                                <img src={pizza} alt="Image Not Found" />
                                                <img src={shape22} alt="Image Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>
                    {/* Navigation */}
                    <div className="swiper-nav-left">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default BannerV4;