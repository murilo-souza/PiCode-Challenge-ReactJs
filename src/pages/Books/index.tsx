import { CarModel } from "../../components/CardModel";
import { Container } from "./styles";
import { Badge } from "../../components/Badge";

export function Books() {
  return (
    <Container>
      <h1>Books bages</h1>
      <CarModel title="Crepusculo" subtitle="Eleonora">
        <Badge title="Diponível" quantity={5} />
        <Badge title="Páginas" quantity={500} />
        <Badge title="Retirados" quantity={4} />
      </CarModel>
    </Container>
  );
}
