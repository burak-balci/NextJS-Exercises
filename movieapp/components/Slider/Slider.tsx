import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Slider.module.css";

const Slider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      effect="fade"
      spaceBetween={50}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className={styles.slider}
    >
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/sQhZqVWIbI2W4YluKEpd729z3Vb.jpg"
          alt="asf"
          className={styles.image}
        />
      </SwiperSlide>
      <span className={styles.title} slot="container-start">
        TRENDING
      </span>
    </Swiper>
  );
};

export default Slider;
