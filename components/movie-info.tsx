import { API_URL } from "../app/constants";
import styles from "../styles/movie-info.module.css";
export const getMovie = async (id: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const res = await fetch(`${API_URL}/${id}`);
  const json = await res.json();
  return json;
};

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a href={movie.homepage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
