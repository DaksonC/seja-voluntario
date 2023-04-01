import styled from "styled-components";

export const ContainerRegisterONG = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  input {
    width: 100%;
    max-width: 30rem;
    height: 2rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 0.25rem;
    background: #c9f9f9;
    color: #004c8c;
  }

  span {
    color: #ff5555;
    font-size: 1rem;
    margin-bottom: 1.5rem;
    margin-top: -0.5rem;
  }

  select {
    width: 100%;
    max-width: 30rem;
    height: 2rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 0.25rem;
    background: #c9f9f9;
    color: #004c8c;

  }

  button {
    width: 100%;
    max-width: 15rem;
    height: 2rem;
    margin-bottom: 1rem;
    padding: 0 1rem;
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    background: #50fa7b;
    font-weight: 600;
    transition: filter 0.2s;
    
    &:hover {
      filter: brightness(0.5);
      color: #004c8c;
    }
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

export const ContentSelected = styled.div`
  width: 100%;
  max-width: 30rem;
  grid-template-columns: 1fr 2fr;
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 1rem;
  height: 2rem;
`;