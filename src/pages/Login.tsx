import { useParams } from "react-router-dom";
import styled from "styled-components";
import Data from "../data.json";
import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
export default function Login() {
  const params = useParams();

  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const [input, setInput] = useState("");
  const [login, setLogin] = useState(false);
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
    if (!login) {
      setInput("");
    }
  };
  console.log(login);
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    console.log("lk");
    setInput(inputValue);
    console.log(input);
    if (gmailRegex.test(inputValue)) {
      setLogin(true);
      console.log("ki");
    } else {
      setLogin(false);
    }
  };

  return (
    <LoginSection>
      <h1>Unlimited movies, TV shows, and more</h1>
      <h3>Watch anywhere. Cancel anytime.</h3>
      <h3>
        Ready to watch? Enter your email to create or restart your membership.
      </h3>
      <form onSubmit={handleFormSubmit}>
        <input
          value={input}
          onChange={(e) => handleInput(e)}
          type="text"
          placeholder="Email address"
        />
      </form>
      {login ? (
        <Link type="submit" to={"/Movies"}>
          Get Started
        </Link>
      ) : (
        <Link type="submit" to={"/"}>
          Get Started
        </Link>
      )}
    </LoginSection>
  );
}

const LoginSection = styled.div`
  background-image: url("public/assets/GE-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg");
  filter: brightness(70%);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;
function useEffect(arg0: () => void, arg1: boolean[]) {
  throw new Error("Function not implemented.");
}
