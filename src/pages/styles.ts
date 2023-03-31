import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;

  div {
    border: 1px solid #f00;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;