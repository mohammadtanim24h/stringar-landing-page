import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import "./BannerCarousel.css";
import joyousCouple from "../../assets/images/joyous-young-couple.png";
import excuseGirl from '../../assets/images/girl-excuse.png';
import luckyWomen from '../../assets/images/lucky-women.png';
import happyWomen from '../../assets/images/two-happy-women.png';

const BannerCarousel = () => {
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
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
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
            </Swiper>
        </div>
    );
};

export default BannerCarousel;
