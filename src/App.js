import "./styles/Style.css";

// import Router from "./Routes/Router";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EditingPage from "./pages/EditingPage";
import AddImage from "./components/AddImage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit" element={<EditingPage />} />
          <Route path="/addImage" element={<AddImage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
