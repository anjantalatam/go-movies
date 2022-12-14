import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface IMovie {
  id: string;
  title: string;
  runtime: Number;
}

function Movies() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setMovies([
      { id: "1", title: "The Shawshank Redemption", runtime: 142 },
      { id: "2", title: "The Godfather", runtime: 175 },
      { id: "3", title: "The Dark Knight", runtime: 153 },
    ]);
  }, []);

  return (
    <>
      <h2>Choose a Movie</h2>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>
            <Link to={`/movies/${m.id}`}>{m.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Movies;
