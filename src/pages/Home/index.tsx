import { Container, Description, Title } from "./styles";
import { BookOpen } from "phosphor-react";

export function Home() {
  return (
    <Container>
      <BookOpen size={100} color="#e1e1e6" />
      <Title>Bem vindo ao gerenciador de biblioteca</Title>
      <Description>Use a barra de navegação para começar a usar</Description>
    </Container>
  );
}
