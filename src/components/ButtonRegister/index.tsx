import { ContainerButton } from './styles'

interface ButtonRegisterProps {
  title: string
  onClick?: () => void
}

export function ButtonRegister({
  title,
  onClick,
  ...rest
}: ButtonRegisterProps) {
  return (
    <ContainerButton {...rest} onClick={onClick}>
      <span>{title}</span>
    </ContainerButton>
  )
}
