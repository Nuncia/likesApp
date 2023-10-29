import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import LikesProvider from "./context/LikesContext";

const App = () => {
  return (
    <div>
      <LikesProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/favoritos"
            element={<Favorites />}
          />
        </Routes>
      </LikesProvider>
    </div>
  );
};
export default App;
