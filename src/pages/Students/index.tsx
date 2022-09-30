import { Badge } from "../../components/Badge";
import { CarModel } from "../../components/CardModel";
import { Header } from "../../components/Header";
import { Container } from "./styled";
import { Student } from "phosphor-react";

export function Students() {
  return (
    <Container>
      <Header registerTypeName="+ Cadastrar aluno" />
      <CarModel
        title="Murilo Leme de Souza"
        subtitle="ID: 190188"
        icon={<Student size={45} color="#e1e1e6" />}
      >
        <Badge title="Livros retirados" quantity={4} />
      </CarModel>
    </Container>
  );
}
