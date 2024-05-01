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
import ComingSoonPage from "./pages/ComingSoonPage";
import AllCategory from "./pages/AllCategory";
import Movies from "./pages/Movies";
import TVseries from "./pages/TVseries";
import MyList from "./pages/MyList";
export const CategoryContext = createContext<{
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setCategoryChange: React.Dispatch<React.SetStateAction<boolean>>;
  categoryChange: boolean;
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  category: "",
  setCategory: () => {},
  categoryChange: false,
  setCategoryChange: () => {},
  login: false,

  setLogin: () => {},
});

function App() {
  const [category, setCategory] = useState("");
  const [categoryChange, setCategoryChange] = useState(false);
  const [login, setLogin] = useState(false);
  return (
    <>
      {" "}
      <GlobalStyles />
      <CategoryContext.Provider
        value={{
          category,
          setCategory,
          categoryChange,
          setCategoryChange,
          login,
          setLogin,
        }}
      >
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
              <Route path={"/ComingSoon"} element={<ComingSoonPage />} />

              <Route path={"/AllCategory"} element={<AllCategory />} />
              <Route path={"/MyList"} element={<MyList />} />

              <Route path={"/Movies"} element={<Movies />} />

              <Route path={"/TVseries"} element={<TVseries />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CategoryContext.Provider>
    </>
  );
}

export default App;
