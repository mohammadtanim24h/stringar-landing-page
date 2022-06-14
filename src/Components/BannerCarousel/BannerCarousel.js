import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import {
    EffectFade,
    Autoplay,
    Pagination,
    FreeMode,
    Navigation,
    Thumbs,
} from "swiper";
import "./BannerCarousel.css";
import joyousCouple from "../../assets/images/joyous-young-couple.png";
import excuseGirl from "../../assets/images/girl-excuse.png";
import luckyWomen from "../../assets/images/lucky-women.png";
import happyWomen from "../../assets/images/two-happy-women.png";
import chattingWithFriend from "../../assets/images/chat-with-friend.png";

const BannerCarousel = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                loop={true}
                effect={"fade"}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[
                    FreeMode,
                    EffectFade,
                    Autoplay,
                    Pagination,
                    Navigation,
                    Thumbs,
                ]}
                className="carousel"
            >
                <SwiperSlide>
                    <img src={joyousCouple} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={excuseGirl} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={luckyWomen} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={happyWomen} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chattingWithFriend} alt="" />
                </SwiperSlide>
            </Swiper>

            {/* thumbs */}
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="carouselThumb mt-2"
            >
                <SwiperSlide>
                    <img src={joyousCouple} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={excuseGirl} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={luckyWomen} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={happyWomen} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={chattingWithFriend} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
