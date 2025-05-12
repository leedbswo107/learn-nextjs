import { Swiper, SwiperSlide } from "swiper/react";
import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-videos.module.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import VideoSwiper from "./swiper";

interface IVideo {
  id: string;
  key: string;
  name: string;
}

const getVideos = async (id: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // throw new Error("some thing is broke !!");
  // error 처리를 위한 주석 처리
  const res = await fetch(`${API_URL}/${id}/videos`);
  const json = await res.json();
  return json;
};
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      <VideoSwiper videos={videos} />
    </div>
    // <div className={styles.container}>
    // <Swiper
    //   slidesPerView={3}
    //   spaceBetween={30}
    //   pagination={{
    //     clickable: true,
    //   }}
    //   modules={[Pagination]}
    //   className="mySwiper"
    // >
    //   {videos.map((video: IVideo) => (
    //     <SwiperSlide>
    //       <iframe
    //         key={video.id}
    //         src={`https://youtube.com/embed/${video.key}`}
    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //         allowFullScreen
    //         title={video.name}
    //       />
    //     </SwiperSlide>
    //   ))}
    // </Swiper>
    // </div>
  );
}
