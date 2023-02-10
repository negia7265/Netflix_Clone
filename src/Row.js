/*
How to send request:: https://api.themoviedb.org/3/movie/213713/videos?api_key=c3fd22e823430a980e0cfb95e356d7d7&language=en-US
data = {
    "id": 505642,
    "results": [
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Now Streaming on Disney+",
            "key": "GR03EwYlVQM",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2023-02-01T15:00:11.000Z",
            "id": "63dac4463dc313008233d4f5"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "How Namor's Wings Work",
            "key": "EafV82hFEks",
            "site": "YouTube",
            "size": 1080,
            "type": "Behind the Scenes",
            "official": true,
            "published_at": "2023-01-31T21:00:09.000Z",
            "id": "63dac0333dc31300af23eb07"
        },
        {
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "Tomorrow on Disney+",
            "key": "PLy1ue1APGo",
            "site": "YouTube",
            "size": 1080,
            "type": "Teaser",
            "official": true,
            "published_at": "2023-01-31T19:00:10.000Z",
            "id": "63d96f3d3dc31300af2356af"
        }
    ]
}

teaser_links = []
for result in data['results']:
    if result['type'] == 'Teaser':
        teaser_links.append('https://www.youtube.com/watch?v=' + result['key'])

print(teaser_links)


*/

import movieTrailer from "movie-trailer";

import React, { useState, useEffect } from "react";
import YouTube from "react-youtube";
import instance from "./axios";
import "./Row.css";
import axios from "axios";
export default function Row(props) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  const [getData, setData] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      const request = await instance.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    getdata();
  }, [props.fetchUrl]);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const [trailerUrl, setTrailerURL] = useState("");
  const handleclick = async (movie) => {
    if (trailerUrl) {
      setTrailerURL("");
    } else {
      const gotData = await axios.get(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=c3fd22e823430a980e0cfb95e356d7d7&language=en-US`
      );
      //console.log(gotData.data.results);
      setData(gotData.data.results);
      console.log(getData);
      for (let data of getData) {
        if (data.type === "Trailer") {
          setTrailerURL(data.key);
          console.log(data.key);
          break;
        }
      }
      // for (let i = 0; i < getData.length; i++) {
      //   console.log(getData[i].type);
      // }
    }
    // if (trailerUrl) {
    //   setTrailerURL("");
    // } else {
    //   movieTrailer(props.isLargeRow ? movie.name : movie?.title || "").then(
    //     (url) => {
    //       const urlParams = new URLSearchParams(new URL(url).search);
    //       console.log(urlParams);
    //       setTrailerURL(urlParams.get("v"));
    //     }
    //   );
    // }
  };

  return (
    <div className="row">
      <h2 style={{ textAlign: "left" }}>{props.title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            //onClick={handleclick}
            onClick={() => handleclick(movie)}
            key={movie.id}
            className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              props.isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
