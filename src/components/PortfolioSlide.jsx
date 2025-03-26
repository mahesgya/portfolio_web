import { EffectCreative, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "../Style/PortfolioSlide.css";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Ormawa from "./ormawa";

function PortfolioSlide() {
  return (
    <div className="container-Slide">
      <h1>What's GOing On?!</h1>
      <Swiper
        grabCursor={true}
        navigation={{ clickable: true }}
        modules={[EffectCreative, Pagination, Navigation]}
        className="mySwiper-Proker"
        spaceBetween={50}
        loop={true}
        slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className="Swiper-Proker">
          <Ormawa/>
        </SwiperSlide>
        <SwiperSlide className="Swiper-Proker">
         <Ormawa/>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}

export default PortfolioSlide;
