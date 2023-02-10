import "./App.css";
import Homepage from "./Homepage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Videoplay from "./Videoplay";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route exact path="/videoplayer" element={<Videoplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
