import "./index.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import LandingPage from "./pages/LandingPage";
import LandingModal from "./pages/LandingModal";
import PomoPage from "./pages/PomoPage";
export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path = "/" element= {<LandingPage/>}/>
          <Route path = "/landing-modal" element = {<LandingModal/>}/>
          <Route path = "/pomo-page" element = {<PomoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}
