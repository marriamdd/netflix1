import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import GlobalStyles from "./globalStyles/GlobalStyles";

import SignIn from "./pages/SignIn";

import MainPage from "./pages/MainPage";

import Layout1 from "./pages/OutLayout";
import Layout2 from "./pages/MainLayout";
import { useState, createContext } from "react";

import SingleMovie from "./pages/SingleMovie";

import Search from "./pages/Search";
import Downloads from "./pages/Downloads";
import More from "./pages/More";
import Category from "./pages/Category";

export const CategoryContext = createContext<{
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}>({
  category: "",
  setCategory: () => {},
});

function App() {
  const [category, setCategory] = useState("Movies");
  return (
    <>
      {" "}
      <GlobalStyles />
      <CategoryContext.Provider value={{ category, setCategory }}>
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

              <Route path={"/Search"} element={<Search />} />
              <Route path={"/More"} element={<More />} />

              <Route path={"/Category"} element={<Category />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoryContext.Provider>
    </>
  );
}

export default App;
