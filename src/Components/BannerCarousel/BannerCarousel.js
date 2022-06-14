import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./BannerCarousel.css";
import joyousCouple from "../../assets/images/joyous-young-couple.png";

const BannerCarousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="carousel"
            >
                <SwiperSlide>
                    <img src={joyousCouple} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={joyousCouple} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={joyousCouple} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={joyousCouple} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
