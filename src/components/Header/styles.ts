import styled from "styled-components";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const ContainerHeader = styled.div`
  width: 100vw;
  height: 7rem;
  background: #282a36;
  box-shadow: 0 0 1rem #bd93f9;

  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
`;

export const ContentHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
`;

export const ImageLogo = styled.div`
  width: 7rem;
  height: auto;
  color: #bd93f9;
  font-size: 3rem;

  h3 {
    font-size: 0.65rem;
  }
`;

export const ContentHeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;
  padding: 0 2rem;
`;

export const ContentHeaderMenuItemDesktop = styled.div`
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 769px) {
    display: none;
  }
`;

export const DropdownMenuTrigger = styled(DropdownMenu.Trigger)`
  background: transparent;
  border: 0;

  button {
    display: none;
  }

  @media (max-width: 768px) {
    button {
      display: block;
      width: 2rem;
      height: 2rem;
      border: 0;
      border-radius: 50%;
      cursor: pointer;
      font-size: 1.5rem;
      color: #bd93f9;
      background: #44475a;
      
      &:hover {
        background: #bd93f9;
        color: #44475a;
      }
    }
  }
`;

export const ContentHeaderMenuMobile = styled(DropdownMenu.Content)`
  width: 100vw;
  height: auto;
  background: #282a36;
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ContentHeaderMenuMobileItem = styled(DropdownMenu.Item)`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonHome = styled.button`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  color: #44475a;
  background: transparent;
  border: 0;
  padding: 0.5rem;
  cursor: pointer;
  
  
  &:hover {
    color: #bd93f9;
  }

  &:disabled {
    color: #bd93f9;
  }
`;

