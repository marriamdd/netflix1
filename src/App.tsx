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
import axios from "axios";
import { Movie } from "./types";
import SingleMovie from "./pages/SingleMovie";
import TVshows from "./pages/TVshows";

function App() {
  const [data, setData] = useState<Movie[]>([]);

  async function getData() {
    try {
      const response = await axios(`http://localhost:3000/movies`);
      const responseData = response.data;

      setData(responseData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getData();
  }, []);
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
            <Route path={"/MainPage"} element={<MainPage data={data} />} />
            <Route
              path={"/single/:title"}
              element={<SingleMovie data={data} />}
            />
            <Route path={"/TVshows"} element={<TVshows data={data} />} />
            <Route path={"/MyList"} element={<MyListPage data={data} />} />
            <Route
              path={"/Movies"}
              element={<Movies data={data} setData={setData} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
