import { Link } from "react-router-dom";
import Data from "../data.json";

export default function Movies() {
  console.log("l");
  return (
    <div>
      {Data.map((item, index) => {
        return (
          <div key={index}>
            <span style={{ color: "black" }}>{item.title}</span>
            <Link to={`/Movies/${item.title}`}>abaaaa</Link>
          </div>
        );
      })}
    </div>
  );
}
