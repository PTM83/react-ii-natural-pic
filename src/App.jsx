import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";

import { ContextApi } from './context/ContextApi.jsx'

const PHOTO_URL = "/photos.json";

const App = () => {
  return (
    <div>
      <Navbar />
      <ContextApi>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favoritos"  element={ <Favorites />} />
          </Routes>
      </ContextApi>
    </div>
  );
};
export default App;
