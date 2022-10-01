import { SmileyXEyes } from "phosphor-react";
import { Container } from "./styles";

export function ErrorPage() {
  return (
    <Container>
      <SmileyXEyes size={100} color="#e1e1e6" />
      <h1>Pagina não encontrada</h1>
      <strong>Por favor, use a barra de navegação para trocar de pagina</strong>
    </Container>
  );
}
