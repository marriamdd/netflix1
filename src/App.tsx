import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import GlobalStyles from "./globalStyles/GlobalStyles";

import SignIn from "./pages/SignIn";
import MyListPage from "./pages/MyListPage";
import MainPage from "./pages/MainPage";
import Movies from "./pages/Movies";
import Layout1 from "./pages/OutLayout";
import Layout2 from "./pages/MainLayout";
import { useState, useEffect } from "react";
import Data from "./data.json";
import { Movie } from "./types";
import SingleMovie from "./pages/SingleMovie";
import TVshows from "./pages/TVshows";
import Search from "./pages/Search";
import Downloads from "./pages/Downloads";
import More from "./pages/More";

function App() {
  // const [data, setData] = useState<Movie[]>([]);

  // async function getData() {
  //   try {
  //     const response = await axios(`http://localhost:3000/movies`);
  //     const responseData = response.data;

  //     setData(responseData);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   getData();
  // }, []);
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
            <Route path={"/single/:title"} element={<SingleMovie />} />
            <Route path={"/Downloads"} element={<Downloads />} />
            <Route path={"/TVshows"} element={<TVshows />} />
            <Route path={"/MyList"} element={<MyListPage />} />
            <Route path={"/Movies"} element={<Movies />} />
            <Route path={"/Search"} element={<Search />} />
            <Route path={"/More"} element={<More />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
