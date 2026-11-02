import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import UploadPage from "./pages/UploadPage"
import FeedPage from "./pages/FeedPage"
export default function LoadPosts() {
  return (
    <Router>
      <div className="wrap">
        <header>
          <span className="logo">Snapfeed</span>

          <nav>
            <NavLink to="/">Feed</NavLink>
            <NavLink to="/upload">Upload</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
    </Router>
  );
}