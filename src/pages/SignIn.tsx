import styled from "styled-components";
import React, { useState } from "react";

import { ErrorStyledComponent } from "../styleComponents/Errorstylescomponent";
import { useContext } from "react";
import { CategoryContext } from "../App";
import { Input, Label } from "../styleComponents/inputStyledComponent";
export default function SignIn() {
  const [error, setError] = useState({
    empty: "",
  });
  const { setLogin } = useContext(CategoryContext);
  const signInFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(emailInput)) {
      setError({ empty: "Email is required." });
    }

    setEmailInput("");
    setPasswordInput("");
    if (emailInput && passwordInput) {
      window.location.href = "/MainPage";
      setLogin(true);
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
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
    setError({ empty: "" });
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
              onChange={handleEmailChange}
              onMouseEnter={handleEmailClick}
              onMouseLeave={handleEmailLeave}
              name="emailORnumberInput"
              id="emailORnumberInput"
              type="text"
            />
            {error.empty && (
              <ErrorStyledComponent>{error.empty}</ErrorStyledComponent>
            )}
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
              onChange={(e) => setPasswordInput(e.target.value)}
              onMouseEnter={handlePasswordClick}
              onMouseLeave={handlePasswordLeave}
              name="passwordInput"
              id="passwordInput"
              type="password"
            />
          </div>

          <button type="submit">Sign In</button>
          <div className="forgetDiv">
            <p style={{ fontSize: "1.5rem" }}>Forget Password?</p>
          </div>

          <div className="rememberMeDiv">
            <input id="checkBox" type="checkBox" />
            <label htmlFor="checkBox">Remember me</label>
          </div>
        </SignInForm>
      </SignInContainer>
    </div>
  );
}
const SignInContainer = styled.div`
  background-color: black;
  height: 600px;
  /* height: 100vh; */
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .rememberMeDiv {
    margin-top: 4rem;
    margin-right: 2.5rem;
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

  & > button {
    border-radius: 4px;
    width: 330px;
    height: 40px;
    background-color: red;
  }
`;
