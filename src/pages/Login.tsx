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
  const [inputClick, setInputClick] = useState(false);
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);
  const HandleSighInClick = () => {
    setSign(true);
  };
  const handleInputClick = () => {
    if (inputClick) {
      setInputClick(false);
    }
    setInputClick(true);
  };
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
    <>
      <Header>
        <div className="logoDiv">
          <img src="/assets/efe87fc48de87facd3a9555f467b33a8 (1).png" alt="" />
        </div>
        <button onClick={HandleSighInClick}>Sign in</button>
      </Header>
      {sign ? (
        <SignIn></SignIn>
      ) : (
        <LoginSection inputClick={inputClick}>
          <div>
            <h1>Unlimited movies, TV shows, and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <form onSubmit={handleFormSubmit}>
              <label className="loginInputLabel" htmlFor="loginInput">
                Email address
              </label>
              <input
                onClick={handleInputClick}
                name="loginInput"
                id="loginInput"
                value={input}
                onChange={(e) => handleInput(e)}
                type="email"
                // placeholder="Email address"
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
          </div>
        </LoginSection>
      )}
    </>
  );
}
const Header = styled.header`
  margin-top: 3rem;
  margin-left: 3rem;
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: space-between;
  & > button {
    margin-right: 7rem;
    background-color: red;
    height: 35px;
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
    padding-inline: 1.5rem;
    border-radius: 4px;
    font-size: 1.8rem;
  }
  .logoDiv {
    img {
      width: 80px;
      height: 40px;
      background-color: transparent;
    }
  }
`;
const SignIn = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #220c0c;
`;
const LoginSection = styled.div<{ inputClick: boolean }>`
  background-image: url("/assets/GE-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpeg");

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

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
    form {
      position: relative;
      input {
        width: 280px;
        height: 48px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
        border-radius: 4px;
        padding-left: 1rem;
        padding-top: 1.5rem;

        margin-bottom: 2rem;
        background-color: rgba(0, 0, 0, 0.5);
        border: 1px solid white;
      }
      label {
        opacity: 0.6;
        position: absolute;

        padding-top: ${(props) => props.inputClick && "0.5rem"};
        font-size: ${(props) => (props.inputClick ? "1.4rem" : "1.7rem")};
        top: ${(props) => (props.inputClick ? "0rem" : "1.4rem")};
        transition: top 0.3s ease;
        left: 1rem;
      }
    }

    a {
      width: 160px;
      height: 48px;
      padding-block: 0.6rem;
      background-color: red;

      box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
      font-size: 2.4rem;
      border-radius: 4px;
      text-decoration: none;
    }
  }
`;
