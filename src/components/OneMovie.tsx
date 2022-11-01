import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IMovie {
  id: string;
  title: string;
  runtime: Number;
}

function OneMovie() {
  const [movie, setMovie] = useState<IMovie>();
  const { id } = useParams();

  useEffect(() => {
    setMovie({
      id: `${id}`,
      title: "Some movie",
      runtime: 150,
    });
  }, []);

  return (
    <>
      <h2>
        Movie: {movie?.title} - {movie?.id}
      </h2>
      <table className="table table-compact table-striped">
        <thead></thead>
        <tbody>
          <tr>
            <td>
              <strong>Title :</strong>
            </td>
            <td>{movie?.title}</td>
          </tr>
          <tr>
            <td>
              <strong>Run time :</strong>
            </td>
            <td>{`${movie?.runtime} minutes`}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default OneMovie;
