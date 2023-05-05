import { Link } from "react-router-dom";

import GalleryList from "../components/GalleryList";

export default function Home() {
  return (
    <div>
      <Link to="/edit">Add image</Link>

      <div className="clearfix"></div>
      <GalleryList />
      <div className="wrapper">
        <div className="dashboard">
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
