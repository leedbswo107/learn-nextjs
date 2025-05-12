// import { API_URL } from "../../../(home)/page";
// const getMovie = async (id: string) => {
//   const res = await fetch(`${API_URL}/${id}`);
//   const json = await res.json();
//   return json;
// };

import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
// import MovieProviders from "../../../../components/movie-providers";

// const getVideos = async (id: string) => {
//   const res = await fetch(`${API_URL}/${id}/videos`);
//   const json = await res.json();
//   return json;
// };

interface IParams {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: IParams) {
  const params = await props.params;
  const id = params.id;
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

export default async function MovieDetail(props: IParams) {
  const params = await props.params;
  const id = params.id;
  // Before Parallel Req
  // const movie = await getMovie(id);
  // const videos = await getVideos(id);

  // After Parallel Req -> 동시에 getMovie, getVideos 함수가 실행됨
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
  // console.log(movie);
  // console.log(">>> video");
  // console.log(videos);
  return (
    <div>
      <Suspense fallback={<h1>Loading Movie Info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading Movie Videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>

      {/* <Suspense fallback={<h1>Loading Movie Providers</h1>}>
        <MovieProviders id={id} />
      </Suspense> */}
      {/* <h1>{movie.title}</h1> */}
      {/* <img src={movie.backdrop_path} /> */}
      {/* <h2>Videos</h2> */}
      {/* <ul>{videos.map(v => {})}</ul> */}
    </div>
  );
}

// <MovieDetail params = {{ id : __movieId}}/>
