import React from "react";
import "./Row.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Videoplay from "./Videoplay";

export default function Movieplay() {
  const links = [
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/Mission.Impossible.-.Fallout.2018.720p.WEBRip.x264-%5BYTS.AM%5D.mp4?alt=media&token=36ff693c-cdae-4946-ace5-3c55c7bc4d5e",
      name: "Mission Impossible:Fallout",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/12.Angry.Men.1957.1080p.BluRay.x264-%5BYTS.AM%5D.mp4?alt=media&token=a43aaf77-9249-46eb-bd33-1d0186f20553",
      name: "12 Angry Men",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/Harry.Potter.And.The.Deathly.Hallows.Part.2.2011.720p.BrRip.264.YIFY.mkv-muxed.mp4?alt=media&token=9cb32fe0-4866-43ae-a506-9b19bd69f4bb",
      name: "Harry Potter",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/John.Wick.Chapter.3.-.Parabellum.2019.720p.WEBRip.x264-%5BYTS.LT%5D.mp4?alt=media&token=99267765-9687-42c7-acb0-8b9bfe2695d0",
      name: "John Wick-3",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/John.Wick.2014.1080p.BluRay.x264-%5BYTS.AG%5D.mp4?alt=media&token=3c036d8f-0621-44c1-a877-c2466ff08201",
      name: "John Wick-1",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/Batman.The.Dark.Knight.2008.1080p.BluRay.x264.YIFY.mp4?alt=media&token=ceb4e6a7-917e-4e2c-a8b2-08070bd9a327",
      name: "The Dark Knight",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/The.Big.Short.2015.720p.BluRay.x264-%5BYTS.AG%5D.mp4?alt=media&token=dfaf3f50-d8fc-4aa3-b7db-6065d4081d5a",
      name: "The Big Short",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/Good.Will.Hunting.1997.720p.BrRip.x264.YIFY.mp4?alt=media&token=d7395c0d-1814-4c70-baf0-405ed7a21087",
      name: "Good Will Hunting",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/Interstellar.2014.2014.1080p.BluRay.x264.YIFY.mp4?alt=media&token=32a58bd1-042a-4495-9054-8f27c7eda0cb",
      name: "Interstellar",
    },
    {
      URL: "https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/Django.Unchained.2012.720p.BluRay.x264.YIFY.mp4?alt=media&token=859760ca-e670-4063-a008-67604356cb76",
      name: "Django Unchained",
    },
  ];

  return (
    <>
      <h1 style={{ textAlign: "left" }}>Movies you can play</h1>
      <div className="row_posters">
        <Link
          //to={{ pathname: "/videoplayer", state: { myProp: "It Works!!" } }}
          to="/videoplayer"
          state={links[0]}
        >
          <img
            id="M-1"
            className="row_poster row_posterLarge"
            src="https://i.ytimg.com/vi/8LvSHZ2ZV6c/movieposter_en.jpg"
            alt="Mission Impossible:Fallout"
          ></img>
        </Link>

        <Link
          //to={{ pathname: "/videoplayer", state: { myProp: "It Works!!" } }}
          to="/videoplayer"
          state={links[1]}
        >
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://images.justwatch.com/poster/178094886/s718/12-angry-men.%7Bformat%7D"
            alt="!2 Angry Men"
          ></img>
        </Link>

        <Link
          //to={{ pathname: "/videoplayer", state: { myProp: "It Works!!" } }}
          to="/videoplayer"
          state={links[2]}
        >
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/984dd857fb7fd0b618b986354d309ba722f539d9fd1dbc2d3fbafb43a70e9017._RI_V_TTW_.jpg"
            alt="Harry Potter"
          ></img>
        </Link>

        <Link to="/videoplayer" state={links[3]}>
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://musicart.xboxlive.com/7/df1a5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
            alt="John Wick-3"
          ></img>
        </Link>

        <Link to="/videoplayer" state={links[4]}>
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_FMjpg_UX1000_.jpg"
            alt="John Wick-1"
          ></img>
        </Link>

        <Link to="/videoplayer" state={links[5]}>
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://resizing.flixster.com/WAHXGKleT3QvhqHUlFGIRgcQAjU=/206x305/v2/https://flxt.tmsimg.com/assets/p173378_p_v8_au.jpg"
            alt="The Dark Knight"
          ></img>
        </Link>

        <Link to="/videoplayer" state={links[6]}>
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://assets-in.bmscdn.com/iedb/movies/images/extra/vertical_logo/mobile/thumbnail/xxlarge/the-big-short-et00035739-12-03-2021-07-23-16.jpg"
            alt="The Big Short"
          ></img>
        </Link>

        <Link to="/videoplayer" state={links[7]}>
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
            alt="Good Will Hunting"
          ></img>
        </Link>

        <Link to="/videoplayer" state={links[8]}>
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://www.themoviedb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            alt="Interstellar"
          ></img>
        </Link>
        <Link to="/videoplayer" state={links[9]}>
          <img
            id="M-2"
            className="row_poster row_posterLarge"
            src="https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
            alt="Django Unchained"
          ></img>
        </Link>
      </div>
    </>
  );
}
