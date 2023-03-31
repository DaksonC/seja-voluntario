import { ContainerHeader } from "./styles";

interface HeaderProps {
  title: string;
}

export function Header({ title }: HeaderProps) {
  return (
    <ContainerHeader>
      <h1>{title}</h1>
    </ContainerHeader>
  )
}