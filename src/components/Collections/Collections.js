import React, { useState } from "react";
import Collection from "./../Collection/Collection";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";
import { Autoplay, Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Collections.css";

const Collections = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowSize(window.innerWidth);
  });

  const { collections } = useSelector((state) => state.collectionsReducer);

  return (
    <div className="container collections">
      <div className="container ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={windowSize >= 998 ? 3 : windowSize >= 625 ? 2 : 1}
          pagination={{ clickable: true }}
          className="collections"
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {collections.map((collection) => {
            return (
              <SwiperSlide key={Math.random()}>
                <Collection data={collection} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Collections;
