import { Link } from "react-router-dom";
import {
  PopularContainer,
  PopularItems,
} from "../styleComponents/MainPagePopularsContainer";
import Data from "../data.json";

export default function NetflixOrigins() {
  const filteredData = Data.movies.filter((item) => item.netflixOrigin);
  return (
    <PopularContainer>
      {" "}
      <span>Popular On Netflix</span>
      <PopularItems>
        {filteredData.map((item, index) => (
          <Link
            to={`/single/${decodeURIComponent(item.title.replace(/\s/g, "_"))}`}
            key={index}
            style={{
              backgroundImage: `url(${item.thumbnail?.trending?.small})`,
            }}
          ></Link>
        ))}
      </PopularItems>
    </PopularContainer>
  );
}
