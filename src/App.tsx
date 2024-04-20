import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import GlobalStyles from "./globalStyles/GlobalStyles";
import Movies from "./pages/Movies";
import Movie from "./pages/Movie";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";

function App() {
  return (
    <>
      {" "}
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/Movies"} element={<Movies />} />
          <Route path={"/Movies/:title"} element={<Movie />} />
          <Route path={"/:SignIn"} element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
