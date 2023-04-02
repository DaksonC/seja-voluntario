import { ContainerHeader, ContentImg, ContentText } from "./styles";
interface HeaderProps {
  title: string;
  description?: string;
  url: string;
}

export function Header({ title, description, url }: HeaderProps) {
  return (
    <ContainerHeader>
      <ContentImg img={url} />
      <ContentText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ContentText>
    </ContainerHeader>
  )
}