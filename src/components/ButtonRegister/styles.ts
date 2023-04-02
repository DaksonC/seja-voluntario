import styled from "styled-components";

export const ContainerButton = styled.button.attrs({
  type: "button",
})`
  width: 12rem;
  height: 3rem;
  border: 0;
  border-radius: 0.5rem;
  background: #6272a4;
  cursor: pointer;

  span {
    font-size: 1rem;
    font-weight: bold;
  }

  &:hover {
    background: #44475a;
    border: 1px solid #fff;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;