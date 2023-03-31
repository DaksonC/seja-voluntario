import styled from "styled-components";

export const ContainerButton = styled.button.attrs({
  type: "button",
})`
  width: 12rem;
  height: 3rem;
  border: 0;
  border-radius: 0.5rem;
  background: linear-gradient(90deg, #ff008e 0%, #ffcd1e 100%);
  cursor: pointer;

  span {
    font-size: 1rem;
    font-weight: bold;
  }

  &:hover {
    background: linear-gradient(90deg, #ffcd1e 0%, #ff008e 100%);
    border: 1px solid #fff;
    color: #004c8c;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;