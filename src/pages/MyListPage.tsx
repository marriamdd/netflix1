import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function MyListPage() {
  const [marked, setMarked] = useState<Movie[]>([]);

  async function axiosdata() {
    try {
      for (let i = 0; ; i++) {
        const response = await axios.get(`http://localhost:3000/${i}`);
        const data = response.data;

        if (!response || !response.data) {
          break;
        }

        if (data.isBookmarked) {
          setMarked((prev) => [...prev, data]);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    axiosdata();
  }, []);

  return (
    <MyListContainer>
      {marked.map((item) => (
        <div key={Math.random()}>
          <img src={item.thumbnail.regular.small} alt="" />
        </div>
      ))}
    </MyListContainer>
  );
}

const MyListContainer = styled.div`
  padding-top: 10rem;

  background-color: black;
  display: grid;

  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(162px, 1fr));
  img {
    width: 100%;
    height: 100%;
  }
`;
