"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function VideoSwiper({ videos }: { videos: [] }) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
        type: "fraction",
      }}
      modules={[Pagination]}
    >
      {videos.map((video) => (
        <SwiperSlide>
          <iframe
            key={video.id}
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
