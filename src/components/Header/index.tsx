import { ContainerHeader } from "./styles";
interface HeaderProps {
  title: string;
  description?: string;
}

export function Header({ title, description }: HeaderProps) {
  return (
    <ContainerHeader>
      <h1>{title}</h1>
      <p>{description}</p>
    </ContainerHeader>
  )
}