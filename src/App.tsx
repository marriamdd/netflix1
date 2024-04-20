import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import GlobalStyles from "./globalStyles/GlobalStyles";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";

function App() {
  return (
    <>
      {" "}
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/Movies"} element={<Movies />} />
          <Route path={"/Movies/:title"} element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
