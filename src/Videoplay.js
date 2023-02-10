import React from "react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import "./Vidoplayer.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
export default function Videoplay(props) {
  const location = useLocation();
  const propsData = location.state;
  console.log(propsData.name);
  return (
    <>
      <Navbar video={true} />
      <div
        style={{
          position: "relative",
          left: "460px",
          top: "200px",
        }}
      >
        <ReactPlayer
          className="screen"
          //url="https://firebasestorage.googleapis.com/v0/b/netflix-clone-9bbc7.appspot.com/o/Mission.Impossible.-.Fallout.2018.720p.WEBRip.x264-%5BYTS.AM%5D.mp4?alt=media&token=36ff693c-cdae-4946-ace5-3c55c7bc4d5e"
          url={`${propsData.URL}`}
          controls
        />
      </div>
    </>
  );
}
