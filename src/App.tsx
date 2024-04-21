import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./pages/Login";
import GlobalStyles from "./globalStyles/GlobalStyles";

import Movie from "./pages/Movie";
import SignIn from "./pages/SignIn";
import Header from "./components/Header";
import MyListPage from "./pages/MyListPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      {" "}
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/MainPage"} element={<MainPage />} />
          <Route path={"/:title"} element={<Movie />} />
          <Route path={"/:SignIn"} element={<SignIn />} />
          <Route path={"/MyList"} element={<MyListPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
