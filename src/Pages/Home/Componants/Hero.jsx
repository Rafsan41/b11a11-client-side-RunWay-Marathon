import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MoveRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Hero = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-[450px]">
            <img
              className="w-full h-full object-cover rounded-lg opacity-50"
              src="https://i.postimg.cc/CL9rFTh9/runway-marathon-1.jpg"
              alt="Runway Marathon 1"
            />
            {/* Overlay text */}
            <div className="absolute inset-50 flex-col items-center justify-center">
              <h2 className="text-4xl md:text-6xl   px-4 py-2 rounded-lg text-center">
                Discover Your Next Challange
              </h2>
              <p className="text-4xl md:text-3xl    px-4 py-2 rounded-lg text-center">
                RunWay Marathon- Your Gateway to Running Excellence
              </p>
              <p className="text-4xl md:text-xl    px-4 py-2 rounded-lg text-center">
                Connect with thousands of runners worldwide. <br /> Find
                marathons, track your pri gress, and achieve your personal best.{" "}
                <br />
                <span>
                  {" "}
                  <button
                    className="btn btn-accent text-4xl md:text-xl px-4 py-8 my-5 rounded-lg text-center btn-center
              ">
                    Explore More Marathon Events <MoveRight size={20} />{" "}
                  </button>
                </span>
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-[450px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://i.postimg.cc/ZY7DMv1b/runway-marathon-2.jpg"
              alt="Runway Marathon 2"
            />
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-[450px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://i.postimg.cc/2yKcbg4b/runway-marathon-3.jpg"
              alt="Runway Marathon 3"
            />
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <div className="relative w-full h-[450px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://i.postimg.cc/FsYn5s4j/runway-marathon-4.jpg"
              alt="Runway Marathon 4"
            />
          </div>
        </SwiperSlide>

        {/* Slide 5 */}
        <SwiperSlide>
          <div className="relative w-full h-[450px]">
            <img
              className="w-full h-full object-cover rounded-lg"
              src="https://i.postimg.cc/x8Cpd9bV/runway-marathon-5.jpg"
              alt="Runway Marathon 5"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
export default Hero;
