import styled from "styled-components";
import { useState } from "react";
export default function SignIn() {
  const signInFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("esmainc");
  };
  const [sign, setSign] = useState(false);
  const HandleSighInClick = () => {
    setSign(true);
  };
  return (
    <div>
      <SignInContainer>
        <SignInForm onSubmit={signInFormSubmit}>
          <h2>Sigh In</h2>
          <input type="text" />
          <input type="password" />
          <button onClick={HandleSighInClick} type="submit">
            Sign In
          </button>
        </SignInForm>
      </SignInContainer>
    </div>
  );
}
const SignInContainer = styled.div`
  background-color: black;

  height: 100vh;
  padding-top: 10rem;
`;
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  justify-content: center;
  align-items: center;
  & > input {
    width: 330px;
    height: 50px;
    padding-left: 2rem;
    font-size: 2rem;
    background-color: transparent;
    border: 1px solid white;
    border-radius: 4px;
  }
  & > button {
    border-radius: 4px;
    width: 330px;
    height: 40px;
    background-color: red;
  }
`;
