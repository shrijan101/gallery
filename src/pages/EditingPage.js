import Edit from "../components/Edit";
import { Link } from "react-router-dom";

export default function EditingPage() {
  
  return (
    <>
      <div className="wrapper">
        <div className="dashboard">
          <ul>
            <li>
              <Link to="/">Gallery</Link>
            </li>
          </ul>
        </div>
        <Edit />
      </div>
    </>
  );
}
