import styled from "styled-components";
import React, { useState } from "react";
import { Input, Label } from "../styleComponents/inputStyledComponent";
export default function SignIn() {
  const signInFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailInput && passwordInput) {
      window.location.href = "/MainPage";
    }
  };
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [email_numberClick, setEmail_numberClick] = useState(false);
  const [passwordClick, setPasswordClick] = useState(false);

  const handleEmailClick = () => {
    setEmail_numberClick(true);
  };

  const handleEmailLeave = () => {
    if (emailInput) {
      setEmail_numberClick(true);
    } else {
      setEmail_numberClick(false);
    }
  };

  const handlePasswordClick = () => {
    setPasswordClick(true);
  };

  const handlePasswordLeave = () => {
    if (passwordInput) {
      setPasswordClick(true);
    } else {
      setPasswordClick(false);
    }
  };

  const handleEmail_input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };
  const handlePassword_input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };
  return (
    <div>
      <SignInContainer>
        <SignInForm onSubmit={signInFormSubmit}>
          <h2>Sigh In</h2>
          <div>
            <Label
              onMouseEnter={handleEmailClick}
              onMouseLeave={handleEmailLeave}
              email_numberClick={email_numberClick}
              htmlFor="emailORnumberInput"
            >
              Email or phone number
            </Label>
            <Input
              value={emailInput}
              onChange={handleEmail_input}
              onMouseEnter={handleEmailClick}
              onMouseLeave={handleEmailLeave}
              name="emailORnumberInput"
              id="emailORnumberInput"
              type="text"
            />
          </div>
          <div>
            <Label
              onMouseEnter={handlePasswordClick}
              onMouseLeave={handlePasswordLeave}
              passwordClick={passwordClick}
              htmlFor="passwordInput"
            >
              Password
            </Label>
            <Input
              value={passwordInput}
              onChange={handlePassword_input}
              onMouseEnter={handlePasswordClick}
              onMouseLeave={handlePasswordLeave}
              name="passwordInput"
              id="passwordInput"
              type="password"
            />
          </div>

          <button type="submit">Sign In</button>
        </SignInForm>
        <div className="forgetDiv">
          <p style={{ fontSize: "1.5rem" }}>Forget Password?</p>
        </div>

        <div className="rememberMeDiv">
          <input id="checkBox" type="checkBox" />
          <label htmlFor="checkBox">Remember me</label>
        </div>
      </SignInContainer>
    </div>
  );
}
const SignInContainer = styled.div`
  background-color: black;

  height: 100vh;
  padding-top: 10rem;

  .rememberMeDiv {
    margin-top: 4rem;
    margin-left: 2.2rem;
    width: 330px;

    display: flex;
    gap: 1rem;
    font-size: 2rem;
  }
  .forgetDiv {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
  }
`;
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  justify-content: center;
  align-items: center;
  & > div {
    position: relative;
  }
  /* & > div input {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    width: 330px;
    height: 50px;
    padding-top: 0.6rem;
    padding-left: 2.3rem;
    font-size: 2rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
  } */
  /* & > div label {
    position: absolute;
    top: 1.5rem;
    left: 2.3rem;
    font-size: 1.2rem;
  } */
  /* .active {
    top: 0.3em;
    font-size: 1rem;
  } */
  & > button {
    border-radius: 4px;
    width: 330px;
    height: 40px;
    background-color: red;
  }
`;
