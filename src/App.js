import "./index.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage";
import PomoPage from "./pages/PomoPage";
export default function App() {
  return (
      <Router>
        <Routes>
          <Route path = "/" element= {<LandingPage/>}/>
          <Route path = "/pomo-page" element = {<PomoPage/>}/>
        </Routes>
      </Router>
  );
}
