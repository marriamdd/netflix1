import styled from "styled-components";
import React, { useState } from "react";
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

  const handleInputClick = () => {
    if (email_numberClick) {
      setEmail_numberClick(false);
    }
    setEmail_numberClick(true);
  };
  const handleEmail_input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailInput(e.target.value);
  };
  const handlePassword_input = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
    console.log("aaa");
  };
  return (
    <div>
      <SignInContainer>
        <SignInForm onSubmit={signInFormSubmit}>
          <h2>Sigh In</h2>
          <div>
            <label
              className={email_numberClick ? "active" : ""}
              htmlFor="emailORnumberInput"
            >
              Email or phone number
            </label>
            <input
              value={emailInput}
              onChange={handleEmail_input}
              onClick={handleInputClick}
              name="emailORnumberInput"
              id="emailORnumberInput"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="passwordInput">Password</label>
            <input
              value={passwordInput}
              onChange={handlePassword_input}
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
  & > div input {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    width: 330px;
    height: 50px;
    padding-top: 0.6rem;
    padding-left: 2.3rem;
    font-size: 2rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
  }
  & > div label {
    position: absolute;
    top: 1.5rem;
    left: 2.3rem;
    font-size: 1.2rem;
  }
  .active {
    top: 0.3em;
    font-size: 1rem;
  }
  & > button {
    border-radius: 4px;
    width: 330px;
    height: 40px;
    background-color: red;
  }
`;
