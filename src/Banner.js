import React, { useState, useEffect } from "react";
import instance from "./axios";
import request from "./request";
import "./Banner.css";
export default function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const req = await instance.get(request.fetchTopRated);

      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length + 1)
        ]
      );
    }
    fetchMovie();
  }, []);

  const repeatElement = (num) => {
    const elements = [];
    for (let i = 0; i < num; i++) {
      elements.push(<br />);
    }
    return elements;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <div className="banner_description">{movie?.overview}</div>
      </div>
      {repeatElement(8)}
      <div className="banner--fadeBottom" />
    </header>
  );
}
