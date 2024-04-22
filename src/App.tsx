import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import GlobalStyles from "./globalStyles/GlobalStyles";
import Movie from "./pages/Movie";
import SignIn from "./pages/SignIn";
import MyListPage from "./pages/MyListPage";
import MainPage from "./pages/MainPage";
import Movies from "./pages/Movies";
import Layout1 from "./pages/Layout1";
import Layout2 from "./pages/Layout2";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState<Movie[]>([]);
  async function getData() {
    try {
      let i = 0;
      while (true) {
        const response = await axios(`http://localhost:3000/${i}`);
        const responseData = response.data;

        if (!response || !response.data) {
          break;
        }

        setData((prevData) => [...prevData, responseData]);

        i++;
      }
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
            <Route path={"/MainPage"} element={<MainPage />} />
            <Route path={"/single/:title"} element={<Movie data={data} />} />
            <Route path={"/MyList"} element={<MyListPage data={data} />} />
            <Route path={"/Movies"} element={<Movies data={data} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
