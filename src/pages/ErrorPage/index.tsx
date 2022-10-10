import { SmileyXEyes } from "phosphor-react";
import { Container, Description, Title } from "./styles";

export function ErrorPage() {
  return (
    <Container>
      <SmileyXEyes size={100} color="#e1e1e6" />
      <Title>Pagina não encontrada</Title>
      <Description>
        Por favor, use a barra de navegação para trocar de pagina
      </Description>
    </Container>
  );
}
