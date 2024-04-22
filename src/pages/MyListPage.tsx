import styled from "styled-components";

export default function MyListPage({
  setData,
  data,
}: {
  setData: (data: Movie[]) => void;
  data: Movie[];
}) {
  console.log(data);
  return (
    <MyListContainer>
      <MyListContainer>
        {data
          .filter((item) => item.isBookmarked)
          .map((item) => (
            <div key={Math.random()}>
              <img src={item.thumbnail.regular.small} alt="" />
            </div>
          ))}
      </MyListContainer>
    </MyListContainer>
  );
}

const MyListContainer = styled.div`
  padding-block: 8rem;
  width: 100%;
  background-color: black;
  display: grid;

  gap: 1rem;
  /* grid-template-columns: repeat(auto-fill, minmax(162px, 1fr)); */
  grid-template-columns: repeat(2, minmax(180px, 1fr));
  img {
    width: 100%;
    height: 100%;
  }
`;
