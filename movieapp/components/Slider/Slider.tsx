import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "./Slider.module.css";
import { Trending, Result } from "../../types";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";

export interface IProps {
  data: Trending;
}

const Slider = ({ data }: IProps) => {
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
      <span className={styles.title} slot="container-start">
        TRENDING MOVIES & TV
      </span>
      {data.results.map((item: Result) => (
        <SwiperSlide key={item.id}>
          <Link href={`trendingdetails/${item.id}`}>
            <a>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
                className={styles.image}
              />
            </a>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
