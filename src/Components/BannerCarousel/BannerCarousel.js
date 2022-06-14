import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import joyousCouple from '../../assets/images/joyous-young-couple.png';

const BannerCarousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
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
