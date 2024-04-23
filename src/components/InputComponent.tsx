// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import styled from "styled-components";
// export default function InputComponent() {
//   const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const inputValue = e.target.value;
//     setInput(inputValue);
//     setError({ empty: "" });
//     if (gmailRegex.test(inputValue)) {
//       setLogin(true);
//       console.log("ki");
//     } else {
//       setLogin(false);
//     }
//   };
//   const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
//   const [input, setInput] = useState("");
//   const [inputClick, setInputClick] = useState(false);
//   const [login, setLogin] = useState(false);
//   const [error, setError] = useState({
//     empty: "",
//   });
//   const location = useLocation();
//   console.log(location);

//   const handleInputClick = () => {
//     if (inputClick) {
//       setInputClick(false);
//     }
//     setInputClick(true);
//   };

//   const navigate = useNavigate();
//   const handleGetStarted = (
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     e.preventDefault();
//     console.log("submitted");
//     if (!login) {
//       setInput("");
//       setError({ empty: "Email is required." });

//       console.log("clear");
//     } else {
//       navigate("/MainPage");
//     }
//   };
//   return (
//     <div>
//       <form>
//         <label className="loginInputLabel" htmlFor="loginInput">
//           Email address
//         </label>
//         <input
//           onClick={handleInputClick}
//           name="loginInput"
//           id="loginInput"
//           value={input}
//           onChange={(e) => handleInput(e)}
//           type="email"
//         />
//         {error.empty && <p>{error.empty}</p>}
//       </form>
//     </div>
//   );
// }

// const Form = styled.form`
//   margin-top: 3rem;
//   position: relative;
//   & > p {
//     position: absolute;
//     font-size: 1.3rem;
//     top: 5.5rem;
//     left: 0.5rem;
//     color: red;
//   }
//   input {
//     width: 280px;
//     height: 48px;
//     box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
//     border-radius: 4px;
//     padding-left: 1rem;
//     padding-top: 1.5rem;
//     margin-bottom: 2rem;
//     background-color: rgba(0, 0, 0, 0.5);
//     border: 1px solid white;
//   }
//   label {
//     opacity: 0.6;
//     position: absolute;

//     padding-top: ${(props) => props.inputClick && "0.5rem"};
//     font-size: ${(props) => (props.inputClick ? "1.4rem" : "1.7rem")};
//     top: ${(props) => (props.inputClick ? "0rem" : "1.4rem")};
//     transition: top 0.3s ease;
//     left: 1rem;
//   }
// `;
