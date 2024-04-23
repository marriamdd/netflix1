import styled from "styled-components";
export const Input = styled.input<{
  inputClick?: boolean;
  email_numberClick?: boolean;
}>`
  width: 280px;
  height: 48px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  padding-left: 1rem;
  padding-top: 1.5rem;
  margin-bottom: 2rem;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid white;

  label {
    opacity: 0.6;
    position: absolute;

    padding-top: ${(props) => props.inputClick && "0.5rem"};
    font-size: ${(props) => (props.inputClick ? "1.4rem" : "1.7rem")};
    top: ${(props) => (props.inputClick ? "0rem" : "1.4rem")};
    transition: top 0.3s ease;
    left: 1rem;
  }
`;
