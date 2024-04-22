// import axios from "axios";
// import { useEffect, useState } from "react";

// export async function getMovies({
//   setData,
//   data,
// }: {
//   setData: (data: Movie[]) => void;
//   data: Movie[];
// }) {
//   try {
//     let i = 0;
//     while (true) {
//       const response = await axios(`http://localhost:3000/${i}`);
//       const data = response.data;
//       console.log(data);
//       if (!response || !response.data) {
//         break;
//       }
//       if (data.category == "Movie") {
//         setData([...data, data]);
//       }
//       i++;
//     }
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   }
// }

// export default function GetData() {
//   useEffect(() => {
//     getMovies(setData);
//   }, [setData]);

//   return <div></div>;
// }
