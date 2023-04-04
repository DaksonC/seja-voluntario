import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  h1 {
    font-size: 3rem;
    color: #44475a;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
