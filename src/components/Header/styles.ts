import styled from "styled-components";

interface IContentImgProps extends React.HTMLAttributes<HTMLDivElement> {
  img: string;
}

export const ContainerHeader = styled.div`
  max-width: 30rem;
  max-height: 25rem;
  text-align: center;
  border-radius: 1rem;
  margin: 1.5rem auto;
  box-shadow: 0 0 5rem #bd93f9;
`;

export const ContentImg = styled.div<IContentImgProps>`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;  
  border-radius: 1rem 1rem 0 0;  
`;

export const ContentText = styled.div`
  border-radius: 0 0 1rem 1rem;
  padding: 1rem;
  text-align: center;
  margin-top: -3rem;

  h1 {
    font-size: 2.5rem;
    color: #f8f8f2;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: #f8f8f2;
  }

  @media (max-width: 425px) {
    margin-top: -1rem;
    h1 {
      font-size: 1.5rem;
    }
    p{
      font-size: 1rem;
    }
  }
`;

