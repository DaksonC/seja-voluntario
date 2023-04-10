import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url("/voluntary.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  div {
    width: 100%;
    max-width: 770px;
    padding: 0 2.5rem;
    background: rgba( 255, 255, 255, 0.30 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.30 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.15 );
    color: #6272a4;
    font-size: 5rem;
    
    h1 {
      margin-top: 1.5rem;
      padding-bottom: 1rem;
      font-size: 3.5rem;
      color: #44475a;
      border-bottom: 0.2rem solid #ff79c6;
    }

    p {
      font-size: 1.5rem;
      color: #6272a4;
      margin: 1rem;
    }

    span {
      color: #44475a;
      font-weight: bold;
    }
  }

  @media (max-width: 425px) {
    div {
      font-size: 2rem;
      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 0.8rem;
      }
   }
  }
`;
