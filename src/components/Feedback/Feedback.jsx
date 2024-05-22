import React from "react";
import FeedbackCard from "./FeedbackCard.jsx";
import { feedbackData } from "./feedback.js";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"; // core Swiper
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

function Feedback() {
  return (
    <section className="py-24 overflow-hidden">
      <h1 className="text-center text-dark-blue font-semibold text-4xl mb-8">
        What they've said
      </h1>

      <div className="flex flex-col items-center w-full mx-auto">
        <Swiper
          breakpoints={{
            340: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            700: {
              slidesPerView: 2,
              spaceBetween: 15,
            },

            1200: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          freeMode={true}
          pagination={{
            clickable: true,
            el: ".custom-swiper-pagination",
          }}
          modules={[FreeMode, Pagination]}
          className="max-w-[90%] md:max-w-[80%]  mx-auto"
        >
          {feedbackData.map((el, i) => (
            <SwiperSlide key={el.name}>
              <FeedbackCard
                image={el.imgUrl}
                name={el.name}
                comment={el.comment}
                index={i}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-swiper-pagination mt-4 flex justify-center space-x-2"></div>

        <button className='bg-bright-red mt-8 text-very-light-gray hover:bg-opacity-75 py-3 px-9 font-semibold text-lg rounded-full shadow-2xl shadow-red-600 transition-all'>Get Started</button>
      </div>
    </section>
  );
}

export default Feedback;
