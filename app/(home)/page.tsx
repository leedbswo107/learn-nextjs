// "use client";
// import { useEffect, useState } from "react";
import Movie from "../../components/movie";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";
// import Link from "next/link";

interface MovieData {
  id: string;
  poster_path: string;
  title: string;
}

export const metadata = {
  title: "Home",
};

// async function getMovies(url) {
//   console.log("fetching...");
//   const res = await fetch(url);
//   const json = await res.json();
//   return json;
// }

const getMovies = async (url: string) => {
  // console.log("fetching start");
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 1000);
  //   console.log("fetching ...");
  // });

  const res = await fetch(url);
  const json = await res.json();
  return json;
};

export default async function HomePage() {
  const movies = await getMovies(API_URL);
  // const [isLoading, setIsLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  // const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";
  return (
    <div className={styles.container}>
      {movies.map((movie: MovieData) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
        // <div key={movie.id}>
        //   <img src={movie.poster_path} alt={movie.title} />
        //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
        // </div>
      ))}
    </div>
  );
  // const getMovies = async (url) => {
  //   const res = await fetch(url);
  //   const json = await res.json();
  //   setMovies(json);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   getMovies(URL);
  // }, []);

  // return (
  //   <div>
  //     <h1>movies</h1>
  //     {isLoading ? "L" : JSON.stringify(movies)}
  //   </div>
  // );
}
// (home) -> route grooups 를 사용한 풀더
