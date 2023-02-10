import React from "react";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Navbar from "./Navbar";
import "./App.css";
import Movieplay from "./Movieplay";
export default function Homepage() {
  return (
    <>
      <div>
        <div className="Homepage">
          <Navbar />
          <Banner />
          <Movieplay />
          <Row
            title="Trending"
            fetchUrl={request.fetchTrending}
            isLargeRow={true}
          />

          <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
          <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
          <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
          <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
          <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
          <Row
            title="Netflix Originals"
            fetchUrl={request.fetchNetflixOriginals}
          />
          <Row title="Documantries" fetchUrl={request.fetchDocumentaries} />
        </div>
      </div>
    </>
  );
}
