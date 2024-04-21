import axios from "axios";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function MyListPage() {
  const [marked, setMarked] = useState<Movie[]>([]);

  useEffect(() => {
    axiosdata();
  }, []);

  async function axiosdata() {
    try {
      let i = 0;
      while (true) {
        const response = await axios.get(`http://localhost:3000/${i}`);
        const data = response.data;

        if (!response || !response.data) {
          // Break out of the loop if there's no more data
          break;
        }

        if (data.isBookmarked) {
          // Add the marked item to the state
          setMarked((prevMarked) => [...prevMarked, data]);
        }

        i++;
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  console.log(marked);

  return (
    <MylistContainer>
      {marked.map((item) => (
        <div key={Math.random()}>
          <span style={{ color: "red" }}>{item.title}</span>
        </div>
      ))}
    </MylistContainer>
  );
}

const MylistContainer = styled.div`
  padding-top: 8rem;
  color: red;
  background-color: green;
  height: 100vh;
`;
