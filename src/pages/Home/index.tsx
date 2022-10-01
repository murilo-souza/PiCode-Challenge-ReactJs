import { Container } from "./styles";
import { BookOpen } from "phosphor-react";

export function Home() {
  return (
    <Container>
      <BookOpen size={100} color="#e1e1e6" />
      <h1>Bem vindo ao gerenciador de biblioteca</h1>
      <strong>Use a barra de navegação para começar a usar</strong>
    </Container>
  );
}
