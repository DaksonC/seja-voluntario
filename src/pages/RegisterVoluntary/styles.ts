import styled from 'styled-components'

export const ContainerRegisterVoluntary = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  form {
    width: 100%;
    max-width: 33rem;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 5rem #bd93f9;
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

  textarea {
    width: 100%;
    max-width: 30rem;
    height: 5rem;
    margin-bottom: 1rem;
    padding: 0.5rem 1rem;
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
    text-align: center;
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
    margin-top: 3.5rem;
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

  @media (max-width: 768px) {
    h1 {
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    input {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 425px) {
    button {
      margin-top: 4.5rem;
      margin-bottom: 0;
    }

    span {
      font-size: 0.8rem;
    }

    select {
      margin-bottom: 0.5rem;
    }
  }
`

export const ContentSelected = styled.div`
  width: 100%;
  max-width: 30rem;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin-bottom: 1rem;
  height: 2rem;
  text-align: center;

  span {
    width: 310%;
    margin-top: -0.5rem;
  }

  @media (max-width: 425px) {
    display: block;
  }
`

export const LabelModal = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  color: #ff5555;

  @media (max-width: 425px) {
    font-size: 1rem;
  }
`

export const ButtonModalCancel = styled.button`
  width: 100%;
  max-width: 15rem;
  height: 2rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border: 0;
  border-radius: 0.25rem;
  color: #fff;
  background: #ff5555;
  font-weight: 600;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.5);
    color: #004c8c;
  }
`

export const ButtonModalOK = styled.button`
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
`

export const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  content: {
    top: '83%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

    width: '100%',
    height: 'auto',
    padding: '2rem',
    border: 'none',
    backgroundColor: '#282a36',

    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr',
    gap: '1rem',
    alineItems: 'center',
    justifyItems: 'center',
  },
}
