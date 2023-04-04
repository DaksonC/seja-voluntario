import styled from "styled-components";

export const ContainerButton = styled.button.attrs({
  type: "button",
})`
  width: 12rem;
  height: 3rem;
  border: 0;
  border-radius: 0.5rem;
  background: #44475a;
  color: #fff;
  cursor: pointer;
  
  span {
    font-size: 1rem;
    font-weight: bold;
  }
  
  &:hover {
    background: #bd93f9;
    color: #44475a;
  }

  &:disabled {
    background: #282a36;
    color: #44475a;
    border: 1px solid #44475a;
    cursor: not-allowed;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;