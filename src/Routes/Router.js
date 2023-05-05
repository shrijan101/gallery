import { Route } from "react-router-dom";
import Home from "../pages/Home.js";
import EditingPage from "../pages/EditingPage";
import addImage from "../components/addImage.js";
// import EditingPage from "../editingPage";
const Router = () => {
  return (
    <>
      <Route path="/" component={Home} exact />
      <Route path="/edit" component={EditingPage} exact />
      <Route path="/addImage" component={addImage}></Route>
    </>
  );
};
export default Router;
