import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { ErrorStyledComponent } from "../styleComponents/Errorstylescomponent";
import { CategoryContext } from "../App";
import { Input, Label } from "../styleComponents/inputStyledComponent";

export default function Login() {
  const { login, setLogin } = useContext(CategoryContext);
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const [input, setInput] = useState("");
  const [inputClick, setInputClick] = useState(false);

  const [error, setError] = useState({
    empty: "",
  });

  const handleInputClick = () => {
    setInputClick(true);
  };
  const handleMouseLeave = () => {
    if (input) {
      setInputClick(true);
    } else {
      setInputClick(false);
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setError({ empty: "" });
  };
  const navigate = useNavigate();
  const handleGetStarted = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!gmailRegex.test(input)) {
      setInput("");
      setError({ empty: "Email is required." });
    } else {
      setLogin(true);
      navigate("/MainPage");
    }
  };

  return (
    <>
      <LoginSection inputClick={inputClick}>
        <div>
          <h1>Unlimited movies, TV shows, and more</h1>
          <h3>Watch anywhere. Cancel anytime.</h3>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>
          <form>
            <Label
              onMouseEnter={handleInputClick}
              onMouseLeave={handleMouseLeave}
              inputClick={inputClick}
              className="loginInputLabel"
              htmlFor="loginInput"
            >
              Email address
            </Label>
            <Input
              onMouseEnter={handleInputClick}
              onMouseLeave={handleMouseLeave}
              name="loginInput"
              id="loginInput"
              value={input}
              onChange={(e) => handleInput(e)}
              type="email"
            />
            {error.empty && (
              <ErrorStyledComponent>{error.empty}</ErrorStyledComponent>
            )}
          </form>
          <Link
            to={login ? "/MainPage" : "/"}
            onClick={(e) => handleGetStarted(e)}
          >
            Get Started
          </Link>
        </div>
      </LoginSection>
    </>
  );
}

const LoginSection = styled.div<{ inputClick: boolean }>`
  background-image: url("/assets/GE-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpeg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 650px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;

    height: 600px;
    flex-wrap: nowrap;
    text-align: center;
    h1 {
      padding-inline: 1rem;

      font-size: 3rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.5px;
    }
    h3 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5;
    }
    & > form {
      margin-top: 3rem;
      position: relative;
    }

    & > a {
      width: 160px;
      height: 48px;
      padding-block: 0.6rem;
      background-color: red;
      border: none;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
      font-size: 2.4rem;
      border-radius: 4px;
      text-decoration: none;
    }
  }
`;
