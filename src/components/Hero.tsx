import Jujutsu from "../assets/images/jujutsu.jpg";
import Kimetsu from "../assets/images/tanjiro.jpg";
import Aonoexorcist from "../assets/images/aonoexorcist.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

const Hero = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={true}
      loop={true}
      className="bg-base-300 py-8 relative"
    >
      <div className="absolute top-[48%] w-full text-center text-white z-10">
        <span className="text-xl lg:text-5xl font-bold p-4 rounded-lg backdrop-blur-md backdrop-sepia bg-neutral/70">
          Welcome and happy enjoy
        </span>
      </div>
      <SwiperSlide>
        <img src={Jujutsu} alt="Jujutsu Kaisen" className="w-[70%] m-auto rounded-2xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Kimetsu} alt="Kimetsu No Yaiba" className="w-[70%] m-auto rounded-2xl" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Aonoexorcist} alt="Ao No Exorcist" className="w-[70%] m-auto rounded-2xl" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Hero;
