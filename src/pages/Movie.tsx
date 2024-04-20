import Data from "../data.json";
import { useParams } from "react-router-dom";
export default function Movie() {
  const { title } = useParams();
  console.log(title);

  const currentmovie = Data.find((item) => item.title == title);
  console.log(currentmovie);
  return <div>{currentmovie?.title}</div>;
}
