import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../styleComponents/InputComponent";

export default function Login() {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  const [input, setInput] = useState("");
  const [inputClick, setInputClick] = useState(false);
  const [login, setLogin] = useState(false);
  const [error, setError] = useState({
    empty: "",
  });
  const location = useLocation();
  console.log(location);

  const handleInputClick = () => {
    if (inputClick) {
      setInputClick(false);
    }
    setInputClick(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInput(inputValue);
    setError({ empty: "" });
    if (gmailRegex.test(inputValue)) {
      setLogin(true);
      console.log("ki");
    } else {
      setLogin(false);
    }
  };
  const navigate = useNavigate();
  const handleGetStarted = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log("submitted");
    if (!login) {
      setInput("");
      setError({ empty: "Email is required." });

      console.log("clear");
    } else {
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
            <label className="loginInputLabel" htmlFor="loginInput">
              Email address
            </label>
            <Input
              inputClick={inputClick}
              onClick={handleInputClick}
              name="loginInput"
              id="loginInput"
              value={input}
              onChange={(e) => handleInput(e)}
              type="email"
            />
            {error.empty && <p>{error.empty}</p>}
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
  height: 100vh;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    height: 100vh;
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
      & > p {
        position: absolute;
        font-size: 1.3rem;
        top: 5.5rem;
        left: 0.5rem;
        color: red;
      }
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
