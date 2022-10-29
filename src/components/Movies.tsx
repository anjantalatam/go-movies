import React, { useEffect, useState } from "react";

interface IMovie {
  id: string;
  title: string;
  runTime: Number;
}

function Movies() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    setMovies([
      { id: "1", title: "The Shawshank Redemption", runTime: 142 },
      { id: "2", title: "The Godfather", runTime: 175 },
      { id: "3", title: "The Dark Knight", runTime: 153 },
    ]);
  }, []);

  return (
    <>
      <h2>Choose a Movie</h2>
      <ul>
        {movies.map((m) => (
          <li key={m.id}>{m.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Movies;
