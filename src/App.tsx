import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import GlobalStyles from "./globalStyles/GlobalStyles";

import Movie from "./pages/Movie";
import SignIn from "./pages/SignIn";
import Header from "./components/Header1";
import MyListPage from "./pages/MyListPage";
import MainPage from "./pages/MainPage";
import Movies from "./pages/Movies";
import Layout1 from "./pages/Layout1";
import Layout2 from "./pages/Layout2";

function App() {
  return (
    <>
      {" "}
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout1 />}>
            <Route path={"/"} element={<Login />} />
            <Route path={"/:SignIn"} element={<SignIn />} />
          </Route>

          <Route element={<Layout2 />}>
            <Route path={"/MainPage"} element={<MainPage />} />
            <Route path={"/single/:title"} element={<Movie />} />
            <Route path={"/MyList"} element={<MyListPage />} />
            <Route path={"/Movies"} element={<Movies />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
